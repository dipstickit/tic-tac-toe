import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import Board from "./components/app/Board";
import ScoreBoard from "./components/app/ScoreBoard";
import { BoardType, Player } from "./types";
import { checkWinner, initialBoard } from "./utils/gameLogic";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<BoardType>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [winner, setWinner] = useState<Player | "Draw" | null>(null);

  const handleClick = useCallback(
    (index: number) => {
      if (board[index] || winner) return;

      const newBoard = board.map((cell, idx) =>
        idx === index ? currentPlayer : cell
      );
      setBoard(newBoard);

      const gameWinner = checkWinner(newBoard);
      if (gameWinner) {
        setWinner(gameWinner);
        if (gameWinner !== "Draw") {
          setScore((prev) => ({ ...prev, [gameWinner]: prev[gameWinner] + 1 }));
        }
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        return;
      }

      if (!newBoard.includes(null)) {
        setWinner("Draw");
        return;
      }

      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    },
    [board, currentPlayer, winner]
  );

  const resetGame = useCallback(() => {
    setBoard(initialBoard);
    setWinner(null);
    setCurrentPlayer("X");
  }, []);

  const resetScore = useCallback(() => {
    setScore({ X: 0, O: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-blue-600 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-white text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tic-Tac-Toe
      </motion.h1>
      <Card className="p-2 sm:p-4 md:p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl">
        <CardContent>
          <Board board={board} handleClick={handleClick} />
        </CardContent>
      </Card>
      {winner && (
        <motion.h2
          className="mt-4 sm:mt-5 md:mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-center text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {winner === "Draw" ? "It's a draw!" : `Winner: ${winner}`}
        </motion.h2>
      )}
      <Button
        variant="secondary"
        size="lg"
        className="mt-4 sm:mt-5 md:mt-6 bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-200"
        onClick={resetGame}
      >
        Restart
      </Button>
      <div className="mt-4 sm:mt-6 md:mt-8 w-full max-w-md">
        <ScoreBoard score={score} resetScore={resetScore} />
      </div>
    </div>
  );
};

export default TicTacToe;
