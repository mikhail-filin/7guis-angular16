import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'guis-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  public listNames: WritableSignal<string[]> = signal([]);
  public selectedIndex: WritableSignal<number | null> = signal(null);
  public firstName: WritableSignal<string | null> = signal(null);
  public lastName: WritableSignal<string | null> = signal(null);
  public filterValue: WritableSignal<string | null> = signal(null);

  public isNameEmpty = computed(() => {
    return !this.firstName() || !this.lastName();
  });
  public filteredNames = computed(() => {
    const filter = this.filterValue();
    const names = this.listNames();

    if (!filter) return names;

    return names.filter((name) => {
      const surname = name.split(',')[0].toLowerCase();
      return surname.startsWith(filter.toLowerCase());
    });
  });

  public createRecord(): void {
    const newName = `${this.lastName()}, ${this.firstName()}`;

    this.listNames.mutate((names) => {
      names.push(newName);
    })
    this.resetNameFields();
  }

  public updateRecord(): void {
    const selectedIndex = this.selectedIndex();
    const updatedName = `${this.lastName()}, ${this.firstName()}`

    if (selectedIndex === null) return;

    this.listNames.mutate((names) => {
      names[selectedIndex] = updatedName;
    });
    this.selectedIndex.set(null);
    this.resetNameFields();
  }

  public deleteRecord(): void {
    const selectedIndex = this.selectedIndex();
    if (selectedIndex === null) return;

    this.listNames.mutate((names) => {
      names.splice(selectedIndex, 1);
    });
    this.selectedIndex.set(null);
  }

  public selectRecord(index: number): void {
    this.selectedIndex.set(index);
  }

  private resetNameFields(): void {
    this.firstName.set(null);
    this.lastName.set(null);
  }
}
