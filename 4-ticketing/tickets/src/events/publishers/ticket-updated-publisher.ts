import { Publisher, Subjects, TicketUpdatedEvent } from "@jc-ticketing/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
