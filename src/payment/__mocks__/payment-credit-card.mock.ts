import { paymentMock } from './payment.mock';
import { PaymentCreditCardEntity } from '../entities/payment-credit-card.entity';

export const paymentCreditCardMock: PaymentCreditCardEntity = {
  ...paymentMock,
  amountPayments: 54,
};
