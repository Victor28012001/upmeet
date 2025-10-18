import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoCall from '../components/VideoCall';
import TipModal from '../components/TipModal';
import UserList from '../components/UserList';
import Header from '../components/Header';
import { ethers } from 'ethers';
import contractABI from '../contractABI.json';

const CONTRACT_ADDRESS = "0xYourContract";

export default function MeetingRoom() {
  const { roomId } = useParams();
  const [userAddress, setUserAddress] = useState('');
  const [contract, setContract] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipient, setSelectedRecipient] = useState('');
  const [participants, setParticipants] = useState(["0xAlice", "0xBob"]);

  useEffect(() => {
    const init = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setUserAddress(await signer.getAddress());

      const cont = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
      setContract(cont);
    };
    init();
  }, []);

  const handleTip = async (to, amount, message) => {
    const tx = await contract.tip(to, message, {
      value: ethers.parseEther(amount)
    });
    await tx.wait();
    alert("Tip sent!");
    setShowModal(false);
  };

  return (
    <div>
      <Header userAddress={userAddress} />
      <h2>Room: {roomId}</h2>
      <VideoCall roomUrl={`https://your-daily-room.daily.co/${roomId}`} />
      <UserList
        participants={participants.filter((p) => p !== userAddress)}
        onTipClick={(addr) => {
          setSelectedRecipient(addr);
          setShowModal(true);
        }}
      />
      {showModal && (
        <TipModal
          recipient={selectedRecipient}
          onTip={handleTip}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
