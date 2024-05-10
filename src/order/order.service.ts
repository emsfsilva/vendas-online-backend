import { Injectable } from '@nestjs/common';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { OrderEntity } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly OrderEntity: Repository<OrderEntity>,
  ) {}

  async createOrder(createOrderDTO: CreateOrderDTO, cartId: number) {
    return null;
  }
}
