import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'guis-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  public listNames: WritableSignal<Set<string>> = signal(new Set());
  public selectedRecord: WritableSignal<string | null> = signal(null);
  public firstName: WritableSignal<string | null> = signal(null);
  public lastName: WritableSignal<string | null> = signal(null);
  public filterValue: WritableSignal<string | null> = signal(null);
  public isNameEmpty = computed(() => {
    return !this.firstName() || !this.lastName();
  });
  public filteredNames = computed(() => {
    const filter = this.filterValue();
    const names = Array.from(this.listNames());
    if (!filter) return names;

    return names.filter((name) => {
      const surname = name.split(',')[0];
      return surname.indexOf(filter) !== -1;
    });
  });

  public createRecord(): void {
    this.listNames.mutate((set) => {
      set.add(`${this.lastName()}, ${this.firstName()}`);
    })
    this.resetNameFields();
  }

  public updateRecord(): void {
    const selectedRecord = this.selectedRecord();
    if (!selectedRecord) return;

    this.listNames.mutate((set) => {
      set.delete(selectedRecord);
      set.add(`${this.lastName()}, ${this.firstName()}`)
    });
    this.selectedRecord.set(null);
  }

  public deleteRecord(): void {
    const selectedRecord = this.selectedRecord();
    if (!selectedRecord) return;

    this.listNames.mutate((set) => set.delete(selectedRecord));
    this.selectedRecord.set(null);
  }

  public selectRecord(name: string): void {
    this.selectedRecord.set(name);
  }

  private resetNameFields(): void {
    this.firstName.set(null);
    this.lastName.set(null);
  }
}
