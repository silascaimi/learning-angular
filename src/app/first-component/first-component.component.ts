import { EventEmitter, OnDestroy } from "@angular/core";
import { Component, Input, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "../interfaces/products";
import { ProductService } from "../services/product.service";

@Component({
  selector: 'first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  styles: ['.centralizado {text-align: center;}'],
  providers: [ProductService]
})
export class FirstComponent implements OnInit, OnDestroy {
  @Input() pageTitle: string = '';
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this._valorDinamico = 'Vallor inicial';
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.productsFiltered = products;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  constructor(private productService: ProductService) { }

  title = 'Primeiro componente';
  elements = ['Primeiro', 'Segundo', 'Terceiro'];
  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png';
  imageWidth = 200;
  isImgVisible: boolean = false;
  price = 55.99;
  codigo = '555-999-55-42';

  products: IProduct[] = [];
  productsFiltered: IProduct[] = [];
  errorMessage: string = '';
  sub!: Subscription;

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

  onClick(): void {
    this.notify.emit('Clicked!');
  }
}