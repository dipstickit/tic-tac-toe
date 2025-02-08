export interface PlayerProps {
  X: number;
  O: number;
}

export interface BoardProps {
  board: Player[];
  handleClick: (index: number) => void;
}

export interface ScoreBoardProps {
  score: PlayerProps;
  resetScore: () => void;
}

export type Player = "X" | "O" | null;
export type BoardType = Player[];
