"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromJson = exports.showElement = exports.hideElement = void 0;
const hideElement = (element) => {
    const $el = $(element);
    $el.each((index, el) => {
        if (el.ariaHidden)
            return;
        el.ariaHidden = "true";
    });
};
exports.hideElement = hideElement;
const showElement = (element) => {
    const $el = $(element);
    $el.each((index, el) => {
        if (!el.ariaHidden)
            return;
        el.ariaHidden = null;
    });
};
exports.showElement = showElement;
const fromJson = (json) => {
    try {
        if (!json || json === '')
            return {};
        if (typeof json === 'string') {
            return JSON.parse(json) ?? JSON.parse(json);
        }
        return json;
    }
    catch (e) {
        return {};
    }
};
exports.fromJson = fromJson;
