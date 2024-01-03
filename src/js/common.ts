import { EventOrJQueryEvent, HTMLElementOrJQuery } from "./lib/types";
import * as jQuery from "jquery";

declare global {
    interface HTMLElement {
        hide: () => void;
        show: () => void;
    }
}

const getElement = (el: HTMLElementOrJQuery): JQuery<HTMLElement> => {
    return el instanceof HTMLElement ? $(el) : el;
}

/**
 * Stops the propagation of the event and prevents the default action
 * @param e The event to stop
 */
export const stopPropagation = (e: EventOrJQueryEvent) => {
    e.stopPropagation();
    e.preventDefault();
};

/**
 * Returns true if the element has the given class
 * @param el The element to check
 * @param className The class to check for
 */
export const hasClass = (el: HTMLElementOrJQuery, className: string) => getElement(el).hasClass(className);

/**
 * Adds the given class to the element
 * @param el The element to add the class to
 * @param className The class to add
 */
export const hideElement = (el: HTMLElementOrJQuery) => {
    const $el = getElement(el);
    if(hasClass($el, 'hidden')) return;
    $el.addClass('hidden');
    $el.attr('aria-hidden', 'true');
    $el.css('display', 'none');
    $el.css('visibility', 'hidden');
};

/**
 * Removes the given class from the element
 * @param el The element to remove the class from
 * @param className The class to remove
 */
export const showElement = (el: HTMLElementOrJQuery) => {
    const $el = getElement(el);
    if(!hasClass($el, 'hidden')) return;
    $el.removeClass('hidden');
    $el.attr('aria-hidden', 'false');
    $el.css('display', '');
    $el.css('visibility', '');
};

export const asJSON = (data: string | object): object => {
    const rx = /[Ss]tring/;
    if (data)
        return rx.test(typeof (data)) ? JSON.parse(data as string) : data;
    return {};
}

if (jQuery) {
    (function ($) {
        $.fn.hide = () => {
            hideElement(this);
            return this;
        }
        $.fn.show = () => {
            showElement(this);
            return this;
        }

        HTMLElement.prototype.hide = () => hideElement(this);
        HTMLElement.prototype.show = () => showElement(this);
    });
}
