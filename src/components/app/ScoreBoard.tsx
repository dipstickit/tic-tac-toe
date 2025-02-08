import { Button } from "@/components/ui/button";
import { ScoreBoardProps } from "@/types";

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, resetScore }) => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4 text-white">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center">
        Score
      </h2>
      <div className="flex justify-around mb-4">
        <div className="text-center">
          <p className="text-lg sm:text-xl font-medium">Player X</p>
          <p className="text-2xl sm:text-3xl font-bold">{score.X}</p>
        </div>
        <div className="text-center">
          <p className="text-lg sm:text-xl font-medium">Player O</p>
          <p className="text-2xl sm:text-3xl font-bold">{score.O}</p>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="w-full bg-white bg-opacity-20 text-white hover:bg-white hover:text-purple-600 transition-colors duration-200"
        onClick={resetScore}
      >
        Reset Score
      </Button>
    </div>
  );
};

export default ScoreBoard;
