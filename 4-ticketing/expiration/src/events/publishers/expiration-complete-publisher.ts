import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@jc-ticketing/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
