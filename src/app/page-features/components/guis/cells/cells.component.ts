import { Component, OnInit } from '@angular/core';
import { COLS, ROWS, START_CHAR_CODE } from './cells.conts';

@Component({
  selector: 'guis-cells',
  templateUrl: './cells.component.html',
  styleUrls: ['./cells.component.scss']
})
export class CellsComponent implements OnInit {
  public cells: string[][] = [];

  protected cols: string[] = [];

  public ngOnInit(): void {
    this.cells = Array.from(Array(COLS)).map(() =>
      Array.from(Array(ROWS)).map(() => '')
    );

    this.cols = this.cells.map((_, index) => {
      return String.fromCharCode(START_CHAR_CODE + index);
    });
  }
}
