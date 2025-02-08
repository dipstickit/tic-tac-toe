import { BoardProps } from "@/types";
import { motion } from "framer-motion";

const Board: React.FC<BoardProps> = ({ board, handleClick }) => {
  return (
    <div className="grid grid-cols-3 gap-y-4 gap-x-2 sm:gap-y-5 sm:gap-x-3 md:gap-y-6 md:gap-x-4 justify-center items-center bg-gray-100 p-4 border-4 rounded-lg">
      {board.map((cell, index) => (
        <motion.button
          key={index}
          className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white border-2 border-gray-300 rounded-sm flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold focus:outline-none focus:ring-2 ${
            cell === "X"
              ? "text-blue-800"
              : cell === "O"
              ? "text-red-600"
              : "text-black"
          }`}
          onClick={() => handleClick(index)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {cell}
        </motion.button>
      ))}
    </div>
  );
};

export default Board;
