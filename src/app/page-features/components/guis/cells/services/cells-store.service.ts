import { Injectable } from '@angular/core';
import { COLS, ROWS } from '../models/cells.conts';

@Injectable({
  providedIn: 'root'
})
export class CellsStoreService {
  public readonly cells: string[][] = Array.from(Array(COLS)).map(() =>
    Array.from(Array(ROWS)).map(() => '')
  );

  public evalCell(exp: string) {
    if (!exp.startsWith('=')) {
      return exp;
    }

    exp = exp
    .slice(1)
    .replace(
      /\b([A-Z])(\d{1,2})\b/g,
      (_, c, r) => `get(${c.charCodeAt(0) - 65},${r})`
    );

    try {
      return new Function('get', `return ${exp}`)(this.getCellValue.bind(this));
    } catch (e) {
      return `#ERROR ${e}`;
    }
  }

  private getCellValue(col: number, row: number): number {
    const val = this.evalCell(this.cells[col][row]);
    const num = Number(val);
    return Number.isFinite(num) ? num : val;
  }
}
