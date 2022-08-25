import { Publisher, Subjects, TicketCreatedEvent } from "@jc-ticketing/common";
import { Ticket } from "../../models/ticket";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
