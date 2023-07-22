import { Injectable, signal, WritableSignal } from '@angular/core';
import { COLS, ROWS } from '../models/cells.conts';

@Injectable({
  providedIn: 'root'
})
export class CellsStoreService {
  public readonly cells: WritableSignal<string>[][] = Array.from(Array(COLS)).map(() =>
    Array.from(Array(ROWS)).map(() => signal(''))
  );

  public evalCell(col: number, row: number) {
    let exp: string = this.cells[col][row]();

    if (!exp.startsWith('=')) {
      return exp;
    }
    exp = this.parseExpression(exp);

    try {
      return new Function('get', `return ${exp}`)(this.getCellValue.bind(this));
    } catch (e) {
      return `error`;
    }
  }

  private parseExpression(exp: string): string {
    return exp
      .slice(1)
      .replace(
        /\b([A-Z])(\d{1,2})\b/g,
        (_, c, r) => `get(${c.charCodeAt(0) - 65},${r})`
      );
  }

  private getCellValue(col: number, row: number): number {
    const val = this.evalCell(col, row);
    const num = Number(val);

    return Number.isFinite(num) ? num : val;
  }
}
