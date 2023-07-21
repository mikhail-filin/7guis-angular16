import { Component, Input } from '@angular/core';
import { CellsStoreService } from '../../services/cells-store.service';

@Component({
  selector: 'guis-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input() public row = 0;
  @Input() public col = 0;

  protected isEditing = false;
  protected cells: string[][] = [];

  public constructor(public cellsStore: CellsStoreService) {
    this.cells = this.cellsStore.cells;
  }

  public enableEditing(): void {
    this.isEditing = true;
  }

  public updateCellValue($event: Event): void {
    const target: HTMLInputElement = $event.target as HTMLInputElement;
    this.isEditing = false;
    this.cellsStore.cells[this.col][this.row] = target.value.trim();
  }
}
