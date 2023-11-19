import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng17-control-flows';
  isChecked = true;
  radioValue = 1;
  collection = [
    { id: 1, name: 'ABC' },
    { id: 2, name: 'XYZ' },
  ];
  emptyCollection = [];
  toggle() {
    this.isChecked = !this.isChecked;
  }
  radioValueChange(value: number) {
    this.radioValue = value;
  }
}
