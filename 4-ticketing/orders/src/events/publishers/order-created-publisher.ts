import { Publisher, OrderCreatedEvent, Subjects } from "@jc-ticketing/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
