import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit {

  boardSize: number = 8;
  board: number[][] = [];
  pieces: any[] =[]

  constructor() {
    for (let i = 0; i < this.boardSize; i++) {
      this.board.push([]);
      this.pieces.push([]);
      for (let j = 0; j < this.boardSize; j++) {
        this.board[i].push(i);
        if (i%2 == 0) {
          if (j%2 == 0) {
            this.pieces[i].push(1);
          } else {
            this.pieces[i].push(0);
          }
        }
      }
    }
    console.table(this.board);
  }

  ngOnInit(): void {
  }

  pieceMoved($event: CdkDragDrop<number[]>) {
    // transferArrayItem($event.previousContainer.data, $event.container.data, $event.previousIndex, $event.currentIndex);
    console.log('event', $event);

  }
}
