import React, { useState } from 'react';

export default function TipModal({ recipient, onTip, onClose }) {
  const [amount, setAmount] = useState("0.01");
  const [message, setMessage] = useState("");

  return (
    <div className="modal">
      <h2>Tip {recipient}</h2>
      <input type="text" placeholder="Amount in ETH" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={() => onTip(recipient, amount, message)}>Send Tip</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
