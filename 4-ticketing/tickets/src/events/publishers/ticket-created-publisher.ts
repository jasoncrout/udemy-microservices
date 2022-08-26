import { Publisher, Subjects, TicketCreatedEvent } from "@jc-ticketing/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
