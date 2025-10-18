import React, { useEffect } from 'react';
import DailyIframe from '@daily-co/daily-js';

export default function VideoCall({ roomUrl }) {
  useEffect(() => {
    const frame = DailyIframe.createFrame({
      showLeaveButton: true,
      iframeStyle: {
        position: 'relative',
        width: '100%',
        height: '500px',
        border: '1px solid #ccc',
      },
    });

    frame.join({ url: roomUrl });
    document.getElementById('video-frame').appendChild(frame.iframe);

    return () => frame.leave();
  }, [roomUrl]);

  return <div id="video-frame" />;
}
