const AnimatedBackground = ({ children }) => {
  return (
    <>
      {/* We need a style tag here for the custom keyframe animations */}
      <style>
        {`
            @keyframes moveBlob1 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              25% { transform: translate(40vw, -20vh) scale(1.2); }
              50% { transform: translate(10vw, 30vh) scale(0.9); }
              75% { transform: translate(-30vw, -15vh) scale(1.1); }
            }
            @keyframes moveBlob2 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              25% { transform: translate(-30vw, 25vh) scale(1.1); }
              50% { transform: translate(20vw, -20vh) scale(0.8); }
              75% { transform: translate(10vw, 10vh) scale(1.2); }
            }
            @keyframes moveBlob3 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              25% { transform: translate(20vw, 30vh) scale(1.2); }
              50% { transform: translate(-40vw, -10vh) scale(0.9); }
              75% { transform: translate(15vw, -25vh) scale(1.1); }
            }
  
            .animate-blob-1 {
              animation: moveBlob1 25s ease-in-out infinite;
            }
            .animate-blob-2 {
              animation: moveBlob2 30s ease-in-out infinite;
            }
            .animate-blob-3 {
              animation: moveBlob3 20s ease-in-out infinite;
            }
          `}
      </style>

      <div className="bg-[#1d1d1d] text-white min-h-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 filter blur-3xl">
              <div
                className="animate-blob-1 absolute w-96 h-96 bg-sky-500/20 rounded-full"
                style={{ top: "10vh", left: "20vw" }}
              ></div>
              <div
                className="animate-blob-2 absolute w-80 h-80 bg-gray-600/30 rounded-full"
                style={{ top: "40vh", left: "60vw" }}
              ></div>
              <div
                className="animate-blob-3 absolute w-72 h-72 bg-purple-500/20 rounded-full"
                style={{ top: "60vh", left: "30vw" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          {children}
        </div>
      </div>
    </>
  );
};



export default AnimatedBackground;
