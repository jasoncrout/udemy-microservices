import { Publisher, Subjects, TicketCreatedEvent } from "@jc-ticketing/common";
import { TicketUpdatedPublisher } from "./ticket-updated-publisher";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
