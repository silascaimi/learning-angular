import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  styles: ['.centralizado {text-align: center;}']
})
export class FirstComponent implements OnInit {
  @Input() pageTitle: string = '';

  ngOnInit(): void {
    this._valorDinamico = 'Vallor inicial';
  }


  title = 'Primeiro componente';
  elements = ['Primeiro', 'Segundo', 'Terceiro'];
  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png';
  imageWidth = 200;
  isImgVisible: boolean = false;
  price = 55.99;
  codigo = '555-999-55-42';


  private _valorDinamico = '';
  get valorDinamico(): string {
    return this._valorDinamico;
  }
  set valorDinamico(valor: string) {
    this._valorDinamico = valor;
  }

  toggleImg(): void {
    this.isImgVisible = !this.isImgVisible;
  }
}