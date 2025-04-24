import React from "react";

const Logo: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#0056A6] to-[#003366] shadow-lg animate-logo-fade-in"
      style={{ animation: 'logo-fade-in 1.2s cubic-bezier(0.4,0,0.2,1)' }}
    >
      <span className="text-white text-2xl font-extrabold tracking-wide text-center select-none">
        Compassion<br />Bridge
      </span>
      <style>{`
        @keyframes logo-fade-in {
          0% { opacity: 0; transform: scale(0.8) rotate(-10deg); }
          70% { opacity: 1; transform: scale(1.05) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .animate-logo-fade-in {
          animation: logo-fade-in 1.2s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
};

export default Logo;
