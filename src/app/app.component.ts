import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'guis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private title: Title) {
    this.title.setTitle('7GUIs - Angular 16');
  }
}
