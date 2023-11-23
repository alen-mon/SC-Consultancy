import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SC-Consultancy';
  myFunction(event: MouseEvent) {
    const element = event.target as HTMLElement;
    element.classList.toggle("change");
  }
}
