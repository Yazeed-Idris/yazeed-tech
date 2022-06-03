import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {ChessPieceType} from "../../../core/enums/chess-piece-type.enum";
import {ChessPiece} from "../../../core/models/chess-piece.model";

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit {


  boardSize: number = 8;
  board: ChessPiece[][][] = [];
  pieces: any[] =[]
  ChessPieceType = ChessPieceType;


  constructor() {
    for (let i = 0; i < this.boardSize; i++) {
      this.board.push([]);
      for (let j = 0; j < this.boardSize; j++) {
        this.board[i].push([]);
      }
    }

    this.initializeBoard()
  }

  ngOnInit(): void {
  }

  pieceMoved($event: CdkDragDrop<ChessPiece[]>) {
    console.log('event data: ', $event);
    if ($event.previousContainer === $event.container) {
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex);
    } else {
      if ($event.container.data.length === 0) {
        transferArrayItem(
          $event.previousContainer.data,
          $event.container.data,
          $event.previousIndex,
          $event.currentIndex,
        );
      }
    }

  }

  private initializeBoard() {

    // white pieces
    this.board[0][0].push(new ChessPiece(ChessPieceType.WHITE_ROOK, {x: 0, y: 0}));
    this.board[0][1].push(new ChessPiece(ChessPieceType.WHITE_KNIGHT, {x: 1, y: 0}));
    this.board[0][2].push(new ChessPiece(ChessPieceType.WHITE_BISHOP, {x: 2, y: 0}));
    this.board[0][3].push(new ChessPiece(ChessPieceType.WHITE_QUEEN, {x: 3, y: 0}));
    this.board[0][4].push(new ChessPiece(ChessPieceType.WHITE_KING, {x: 4, y: 0}));
    this.board[0][5].push(new ChessPiece(ChessPieceType.WHITE_BISHOP, {x: 5, y: 0}));
    this.board[0][6].push(new ChessPiece(ChessPieceType.WHITE_KNIGHT, {x: 6, y: 0}));
    this.board[0][7].push(new ChessPiece(ChessPieceType.WHITE_ROOK, {x: 7, y: 0}));
    this.board[1].map((row, index) => {
      row.push(new ChessPiece(ChessPieceType.WHITE_PAWN, {x: index, y: 1}));
    });

    // black pieces
    this.board[7][0].push(new ChessPiece(ChessPieceType.BLACK_ROOK, {x: 0, y: 7}));
    this.board[7][1].push(new ChessPiece(ChessPieceType.BLACK_KNIGHT, {x: 1, y: 7}));
    this.board[7][2].push(new ChessPiece(ChessPieceType.BLACK_BISHOP, {x: 2, y: 7}));
    this.board[7][3].push(new ChessPiece(ChessPieceType.BLACK_QUEEN, {x: 3, y: 7}));
    this.board[7][4].push(new ChessPiece(ChessPieceType.BLACK_KING, {x: 4, y: 7}));
    this.board[7][5].push(new ChessPiece(ChessPieceType.BLACK_BISHOP, {x: 5, y: 7}));
    this.board[7][6].push(new ChessPiece(ChessPieceType.BLACK_KNIGHT, {x: 6, y: 7}));
    this.board[7][7].push(new ChessPiece(ChessPieceType.BLACK_ROOK, {x: 7, y: 7}));
    this.board[6].map((row, index) => {
      row.push(new ChessPiece(ChessPieceType.BLACK_PAWN, {x: index, y: 6}));
    });
  }
}
