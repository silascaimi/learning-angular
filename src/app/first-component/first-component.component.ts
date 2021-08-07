import { Component } from "@angular/core";

@Component({
  selector: 'first-component',
  templateUrl: './first-component.component.html'
})
export class FirstComponent {
  title = 'Primeiro componente';
  elements = ['Primeiro', 'Segundo', 'Terceiro'];
  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png';
  imageWidth = 200;
  isImgVisible: boolean = false;
  valorDinamico = 'Valor inicial';

  toggleImg(): void {
    this.isImgVisible = !this.isImgVisible;
  }
}