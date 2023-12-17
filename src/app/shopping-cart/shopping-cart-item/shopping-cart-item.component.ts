import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent {
  /**
   * * Comunicación entre componentes relacionados (padre - hijo)
   * Como el componente shopping-cart y shopping-cart-item estan relaciados podemos hacer una comunicación padre - hijo con el decorador @Input
   * 
   * Con el decorador @Input podemos definir datos de entrada
   */
  @Input() cartItem!: CartItem;

  /**
   * * Comunicación entre componentes relacionados (padre - hijo)
   * Con el decorador @Output podemos definir emisores de eventos personalizados
   */
  @Output() cartItemDeleteEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Funcion para emitir un evento al componente padre desde el hijo, cuando se de clic en el boton eliminar
   */
  onDeleteClicked(): void {
    this.cartItemDeleteEvent.emit();
  }
}

