import { Subjects, Publisher, PaymentCreatedEvent } from "@jc-ticketing/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
