import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="fixed top-10 left-10  z-50">
      <React.Fragment>
        {isOpen && (
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="L61p2uyiMSo"
            onClose={() => setOpen(false)}
            style={{
              width: "640px",
              height: "480px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              padding: "20px",
            }}
          />
        )}
        <button
          onClick={() => setOpen(true)}
          className="border text-black border-gray-300 hover:bg-red-600 bg-white cursor-pointer  py-2 px-4"
        >
          Play Example
        </button>
      </React.Fragment>
    </div>
  );
};

export default VideoModal;
