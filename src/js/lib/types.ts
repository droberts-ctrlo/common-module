export type EventOrJQueryEvent = Event | JQuery.Event;
export type HTMLElementOrJQuery = TOrJQuery<HTMLElement>;
export type TOrJQuery<T> = T | JQuery<T>;
