import {Component, Input, OnInit} from '@angular/core';

import {ChessPieceType} from "../../../../core/enums/chess-piece-type.enum";
import {ChessPiece} from "../../../../core/models/chess-piece.model";

@Component({
  selector: 'app-chess-piece',
  templateUrl: './chess-piece.component.html',
  styleUrls: ['./chess-piece.component.scss']
})
export class ChessPieceComponent implements OnInit {
  @Input() pieceChoice: ChessPieceType | string = ChessPieceType.WHITE_PAWN;
  @Input() chessFolderLocation: string = '/assets/Images/chess';
  @Input() theme: string = 'normal'
  @Input() pieceData: ChessPiece = new ChessPiece(this.pieceChoice, {x: 0, y: 0});

  constructor() {
  }

  ngOnInit(): void {
  }

}
