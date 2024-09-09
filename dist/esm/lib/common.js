export const hideElement = (element) => {
    const $el = $(element);
    $el.each((index, el) => {
        if (el.ariaHidden)
            return;
        el.ariaHidden = "true";
    });
};
export const showElement = (element) => {
    const $el = $(element);
    $el.each((index, el) => {
        if (!el.ariaHidden)
            return;
        el.ariaHidden = null;
    });
};
export const fromJson = (json) => {
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
