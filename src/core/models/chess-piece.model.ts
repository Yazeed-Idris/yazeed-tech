import {ChessPieceType} from "../enums/chess-piece-type.enum";

class ChessPosition {
  x: number;
  y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
}

export class ChessPiece {
  pieceChoice: ChessPieceType | string;
  position: ChessPosition;
  constructor(piece: ChessPieceType | string, position: ChessPosition) {
    this.pieceChoice = piece;
    this.position = position;
  }
}
