import { CartEntity } from '../entities/cart.entity';
import { ReturnCartProductDTO } from '../../cart-product/dtos/return-cart-product.dto';

export class ReturnCartDTO {
  id: number;
  cartProduct?: ReturnCartProductDTO[];

  constructor(cart: CartEntity) {
    this.id = cart.id;
    //Verifica se o cartProduct existe. Se existir, sera varrido pois é um array e converter para o returnDTO
    this.cartProduct = cart.cartProduct
      ? cart.cartProduct.map(
          (cartProduct) => new ReturnCartProductDTO(cartProduct),
        )
      : undefined;
  }
}
