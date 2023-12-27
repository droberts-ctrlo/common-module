import { EventOrJQueryEvent, HTMLElementOrJQuery } from "./lib/types";

const getElement = (el: HTMLElementOrJQuery): JQuery<HTMLElement> => {
    return el instanceof HTMLElement ? $(el) : el;
}

export const stopPropagation = (e: EventOrJQueryEvent) => {
    e.stopPropagation();
    e.preventDefault();
};

export const hasClass = (el: HTMLElementOrJQuery, className: string) => getElement(el).hasClass(className);

export const hideElement = (el: HTMLElementOrJQuery) => {
    const $el = getElement(el);
    if(hasClass($el, 'hidden')) return;
    $el.addClass('hidden');
    $el.attr('aria-hidden', 'true');
    $el.css('display', 'none');
    $el.css('visibility', 'hidden');
};

export const showElement = (el: HTMLElementOrJQuery) => {
    const $el = getElement(el);
    if(!hasClass($el, 'hidden')) return;
    $el.removeClass('hidden');
    $el.attr('aria-hidden', 'false');
    $el.css('display', '');
    $el.css('visibility', '');
};
