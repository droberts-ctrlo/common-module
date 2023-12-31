export type EventOrJQueryEvent = Event | JQuery.Event;
export type HTMLElementOrJQuery = TOrJQuery<HTMLElement>;
export type TOrJQuery<T extends HTMLElement> = T | JQuery<T>;
