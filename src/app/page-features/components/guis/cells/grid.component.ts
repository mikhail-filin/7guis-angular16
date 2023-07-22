import { Component, WritableSignal } from '@angular/core';
import { START_CHAR_CODE } from './models/cells.conts';
import { CellsStoreService } from './services/cells-store.service';

@Component({
  selector: 'guis-cells',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  protected cells: WritableSignal<string>[][];
  protected cols: string[] = [];

  public constructor(private cellsStore: CellsStoreService) {
    this.cells = this.cellsStore.cells;
    this.cols = this.cells.map((_, index) => {
      return String.fromCharCode(START_CHAR_CODE + index);
    });
  }
}
