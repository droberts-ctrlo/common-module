declare global {
    interface Window {
        $: JQueryStatic;
    }
}

export {};

window.$ = require('jquery');