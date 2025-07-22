// import React from 'react';
// import DiceRoll from '@/components/DiceRoll';

// const CalculateHeader = ({ handleCalculate, isCalculating }) => {
//   return (
//     <div>
//       <div className='flex justify-center'>
//         <button
//           onClick={handleCalculate}
//           className="bg-green-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-700 transition"
//         >
//           Calculate Score
//         </button>
//       </div>
//       <div className="flex items-center justify-center">
//         <DiceRoll />
//         <div className="w-40 h-40 rounded-full border-2 border-cyan-400 flex items-center justify-center text-2xl font-bold text-white">
//           {isCalculating ? (
//             <img
//               src="/images/gifs/favorite-facts.gif"
//               alt="Calculating..."
//               className="h-3/4 w-3/4 object-contain"
//             />
//           ) : (
//             `0%`
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CalculateHeader;