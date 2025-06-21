import React, { useState, useRef } from 'react';
import './bubu.css';
import confetti from 'canvas-confetti';

const reasons = [
  "You understand me even when I don’t speak.",
  "Your smile feels like home.",
  "You make every moment beautiful.",
  "Even your anger is cute.",
  "You care in the tiniest ways.",
  "You bring peace to my storms.",
  "Your laughter is my favorite sound.",
  "You always know when something’s wrong.",
  "You're beautifully weird — just like me.",
  "You’re my biggest comfort.",
  "Your hugs cure my bad days.",
  "You support my dreams.",
  "You believe in me.",
  "Your honesty is precious.",
  "You're my best friend.",
  "Your eyes tell stories.",
  "You laugh at my jokes.",
  "You challenge me to grow.",
  "You’re my calm in chaos.",
  "Your energy lights up rooms.",
  "You inspire me daily.",
  "You trust me completely.",
  "You forgive me easily.",
  "You love unconditionally.",
  "You make me feel safe.",
  "You're my favorite hello.",
  "You're the best part of my nights.",
  "You listen without judgment.",
  "You make silly moments gold.",
  "You’re amazing at surprises.",
  "Your kindness knows no bounds.",
  "You stand by me always.",
  "Your advice is thoughtful.",
  "You make me a better person.",
  "You accept me as I am.",
  "You’re my forever partner.",
  "Your creativity amazes me.",
  "You make everyday special.",
  "You look adorable when sleepy.",
  "Your dreams excite me.",
  "You’re stronger than you know.",
  "You care for others deeply.",
  "You’re beautifully humble.",
  "You shine in your own way.",
  "You embrace my flaws.",
  "You're my favorite conversation.",
  "Your fashion sense thrills me.",
  "You enjoy life to the fullest.",
  "You’re the sweetest contradiction.",
  "Your presence soothes me.",
  "You light up my world.",
  "You never hold back love.",
  "Your faith in us gives strength.",
  "You solve problems gracefully.",
  "You laugh with your whole heart.",
  "You comfort me wordlessly.",
  "You make the simple magical.",
  "You see beauty in everything.",
  "You're my daily sunshine.",
  "You balance me perfectly.",
  "Your curiosity fascinates me.",
  "You keep me grounded.",
  "You celebrate my wins.",
  "You cry with me in pain.",
  "You're my rock during storms.",
  "You’re effortlessly beautiful.",
  "Your little quirks endear you.",
  "You make silence comfortable.",
  "Your maturity inspires me.",
  "You care for your family.",
  "You love without limits.",
  "You're my favorite co-chef.",
  "You encourage my passions.",
  "You cherish memories.",
  "You learn with grace.",
  "You’re brave every day.",
  "You make sacrifices silently.",
  "You ignite my creativity.",
  "You bring balance to my chaos.",
  "You sparkle in challenges.",
  "You cook with love.",
  "You're thoughtful even in silence.",
  "You laugh at midnight memes.",
  "You're poetic without trying.",
  "You hold my hand during storms.",
  "You believe in second chances.",
  "You're loyal to your core.",
  "You respect my boundaries.",
  "You’re patient with me.",
  "You’re wise beyond years.",
  "You smile with your soul.",
  "Your presence calms my mind.",
  "You treat every sunset as an event.",
  "You make time feel eternal.",
  "You're the reason I smile.",
  "You’re mine. Forever and always.",
  "You're the voice I look for when I'm scared.",
  "You complete all my unfinished parts.",
  "You’re the person I see in every love song.",
  "You're the calm in my chaos.",
];


export default function ForBubu() {
  const [proposalVisible, setProposalVisible] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const [confirmYes, setConfirmYes] = useState(false);
  const [noClicks, setNoClicks] = useState(0);
  const [showNoPopup, setShowNoPopup] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const noBtn = useRef(null);

  const moveNo = () => {
    setNoClicks(prev => {
      const newCount = prev + 1;
      if (newCount >= 5) {
        setShowNoPopup(true);
        setTimeout(() => setShowNoPopup(false), 3000);
      }
      return newCount;
    });
    const top = Math.floor(Math.random() * 150);
    const left = Math.floor(Math.random() * 150);
    if (noBtn.current) {
      noBtn.current.style.position = 'absolute';
      noBtn.current.style.top = `${top}px`;
      noBtn.current.style.left = `${left}px`;
    }
  };

  const handleYes = () => setConfirmYes(true);

  const confirmYesNow = () => {
    setConfirmYes(false);
    setProposalVisible(false);
    setYesClicked(true);
    setTimeout(() => setShowEnvelope(true), 800);
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 to-pink-200 p-4 relative overflow-hidden">
      <div className={`${proposalVisible && !yesClicked ? 'blur-sm pointer-events-none' : ''} transition-all duration-300 ease-in-out`}>
        <h1 className="text-4xl font-bold text-pink-600 text-center mt-6 font-cursive drop-shadow-sm">FOR BUBU 💖</h1>
        <p className="text-center text-gray-700 text-lg italic mt-1 mb-8">100 Reasons Why I Love You</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[95vw] mx-auto justify-items-center">
          {reasons.map((reason, i) => (
            <div className="flip-card" key={i}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="text-pink-800 font-bold text-xl">{i+1}</p>
                </div>
                <audio autoPlay loop src="/music.mp3" />
                <div className="flip-card-back">
                  <p className="text-white text-sm px-2 text-center">{reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!yesClicked && (
          <div className="mt-10 flex justify-center">
            <button onClick={()=>setProposalVisible(true)} className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg text-lg transition-all duration-300">
              Press for something special ❤️
            </button>
          </div>
        )}
      </div>

      {proposalVisible && !yesClicked && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-sm px-4">
          <div className="bg-white p-6 rounded-2xl shadow-2xl text-center w-[90%] max-w-md">
            <div className="text-5xl mb-2 animate-bounce">💍</div>
            <h2 className="text-2xl text-pink-700 font-bold font-cursive mb-2">A small question...</h2>
            <p className="text-gray-800 mb-6 text-[15px] px-2">Will you marry me and be mine forever — through every smile, tear, madness & magic? 💖</p>
            <div className="flex justify-center gap-6 mt-4 relative">
              <button onClick={handleYes} className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full shadow-md">Yes ❤️</button>
              <button ref={noBtn} onMouseEnter={moveNo} className="bg-gray-400 text-white px-5 py-2 rounded-full shadow-md">No 🙄</button>
            </div>
          </div>
        </div>
      )}

      {confirmYes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-sm w-full">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">Are you sure?</h3>
            <p className="text-gray-700 mb-5">Are you really saying <span className="font-bold text-pink-500">YES</span> to me? 🥺</p>
            <div className="flex justify-center gap-4">
              <button onClick={confirmYesNow} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">Confirm ✅</button>
              <button onClick={()=>setConfirmYes(false)} className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-full">Cancel ❌</button>
            </div>
          </div>
        </div>
      )}

      {showNoPopup && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-pink-100 text-pink-800 px-5 py-3 rounded-xl shadow-md z-50 text-sm">
          Why are you clicking on NO? 😤 Can't you click YES once? 😢
        </div>
      )}

      {yesClicked && showEnvelope && !showFinalMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur px-4">
          <div className="envelope cursor-pointer" onClick={()=>setShowFinalMessage(true)}>
            <div className="envelope-top"/>
            <div className="envelope-letter">
              <p className="text-pink-700 font-semibold text-center">Click to open your message </p>
            </div>
          </div>
        </div>
      )}

      {showFinalMessage && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-xl shadow-2xl text-center animate-slide-up max-w-md w-full">
            <h2 className="text-2xl font-bold text-pink-700 font-cursive mb-4">You just made me the happiest person alive 💘</h2>
            <p className="text-pink-600 font-medium text-[15px] leading-relaxed">
              I promise to always hold your hand, protect your smile, and be your strength in every season of life.
              This is just the beginning of forever, my Bubu. 💍💖
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
