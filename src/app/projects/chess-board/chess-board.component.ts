import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit {

  boardSize: number = 8;
  board: any[][] = [];
  pieces: any[] =[]


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

  pieceMoved($event: CdkDragDrop<number[][]>) {
    if ($event.previousContainer === $event.container) {
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex);
    } else {
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex,
      );
    }

  }

  private initializeBoard() {
    this.board[0][0].push(1);
  }
}
