import { Publisher, OrderCancelledEvent, Subjects } from "@jc-ticketing/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
