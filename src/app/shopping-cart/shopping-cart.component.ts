import { Component } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  /**
   * ? Recomendación sobre los componentes
   * Los componentes solo deberian tener estado y logica totalmente relacionada con la presentación de la interfaz.
   * 
   * Para la logica referente a la extracción de data, calculos, etc, deberian definirse en un servicio.
   */

  // Array de items en el carrito
  cartItems: CartItem[] = [
    {
      imageUrl: 'headphones.jpg',
      name: 'Auriculares',
      price: 50,
    },
    {
      imageUrl: 'keyboard.jpg',
      name: 'Teclado',
      price: 14.5,
    },
    {
      imageUrl: 'monitor.jpg',
      name: 'Monitor',
      price: 199.99,
    },
  ];

  get total(): number {
    return this.cartItems.reduce((acc, { price }) => (acc += price), 0);
  }
  constructor() {}

  ngOnInit(): void {}

  /**
   * Metodo para eliminar del array el item que le pasan por parametro
   */
  deleteItem(itemToDelete: CartItem): void {
    this.cartItems = this.cartItems.filter((item) => item !== itemToDelete);
  }
}

/**
 * ? Explicación general de la comunicación entre componentes relacionados (padre - hijo)
 * 
 * La comunicación desde el padre al hijo en los componentes se consigue por medio del vinculo de propiedades con el operador @Input
 * 
 * Y la comunicación desde el hijo al padre en los componente se consigue emitiendo eventos con el operador @Output desde el hijo, a los que el padre reacciona.
 */

/**
 * ? Lifecycle hooks o ciclos de vida de un componente
 * El orden del ciclo de vida de un componente es:
 * - constructor
 * - ngOnChanges
 * 
 * * ngOnInit 
 * Angular lo llama una vez que esten inicializados todos los inputs
 * Sirve para inicializar propiedades dependientes del valort de algun @Input
 * O peticiones de datos al servidor.
 * 
 * - ngDoCheck
 *  - ngAfterContentInit
 *  - ngAfterContentChecked
 *  - ngAfterViewInit
 *  - ngAfterViewChecked
 * 
 * * ngOnDestroy
 * Angular lo llama antes de destruir el componente
 * Sirve sobre todo para hacer limpieza de recursos que no son eliminados automaticamente por el colector de basura, como por ejemplo un setinterval que hayamos creado, una suscripción a un observador.
 */