"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromJson = exports.showElement = exports.hideElement = void 0;
const hideElement = (element) => {
    $(element).each((_, el) => {
        if (el.classList.contains('hidden'))
            return;
        el.classList.add('hidden');
        el.setAttribute('aria-hidden', 'true');
    });
};
exports.hideElement = hideElement;
const showElement = (element) => {
    $(element).each((_, el) => {
        if (!el.classList.contains('hidden'))
            return;
        el.classList.remove('hidden');
        el.removeAttribute('aria-hidden');
    });
};
exports.showElement = showElement;
const fromJson = (json) => {
    try {
        let result = null;
        if (!json || json === '')
            return {};
        if (typeof json === 'string') {
            result = JSON.parse(json);
        }
        return result ?? json ?? {};
    }
    catch (e) {
        return {};
    }
};
exports.fromJson = fromJson;
