import { Component } from '@angular/core';

@Component({
  selector: 'lng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular';

  onNotify(evento: string) {
    console.log(evento);
  }
}
