import React, { useState } from 'react';

const DiceRoll = () => {
  const [rolling, setRolling] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const rollDice = () => {
    setRolling(true);
    setResult(null);

    setTimeout(() => {
      const newResult = Math.floor(Math.random() * 100) + 1;
      setResult(newResult);
      setRolling(false);
    }, 1200); // Matches animation duration
  };
// see if i can conditionally get rid of the box and then roll the dice onto the entire page
  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <button
        onClick={rollDice}
        className="px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg shadow-lg hover:bg-cyan-700 transition"
      >
        Feeling Lucky?
      </button>

      <div className="w-24 h-24 flex items-center justify-center rounded-xl border-4 border-cyan-400 bg-black text-white text-4xl font-bold">
        {rolling ? (
          <div className="animate-spin-slow">🎲</div>
        ) : result !== null ? (
          result
        ) : (
          '?'
        )}
      </div>
    </div>
  );
};

export default DiceRoll;