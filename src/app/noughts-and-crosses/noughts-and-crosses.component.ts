import { Component, OnInit } from '@angular/core';

import { NoughtsAndCrossesService } from './shared/noughts-and-crosses.service';

@Component({
  selector: 'app-noughts-and-crosses',
  templateUrl: './noughts-and-crosses.component.html',
  styleUrls: ['./noughts-and-crosses.component.css']
})
export class NoughtsAndCrossesComponent implements OnInit {

  constructor(private noughtsAndCrossesService: NoughtsAndCrossesService) { }

  ngOnInit(): void {
    this.noughtsAndCrossesService.startGame();
  }

  get showStart(): boolean {
    return this.noughtsAndCrossesService.showStart;
  }

  
  get showBoard(): boolean {
    return this.noughtsAndCrossesService.showBoard;
  }

  get showEnd(): boolean {
    return this.noughtsAndCrossesService.showEnd;
  }

  startNewGame($event: any): void {
    $event.preventDefault();
    this.noughtsAndCrossesService.startNewGame();
  }

  playGame(positionX: number, positionY: number): void {
    this.noughtsAndCrossesService.playGame(positionX, positionY);
  }

  showX(positionX: number, positionY: number): boolean {
    return this.noughtsAndCrossesService.showX(positionX, positionY);
  }

  showO(positionX: number, positionY: number): boolean {
    return this.noughtsAndCrossesService.showO(positionX, positionY);
  }

  showVictory(positionX: number, positionY: number): boolean {
    return this.noughtsAndCrossesService.showVictory(positionX, positionY);
  }

  get player(): number {
    return this.noughtsAndCrossesService.player;
  }

  resetGame($event): void {
    $event.preventDefault();
    return this.noughtsAndCrossesService.resetGame();
  }

}
