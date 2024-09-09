// Instanceof is used throughout, this is because we need to ensure ElementLike is not overwritten by JQuery (else we could use `$el=$(element)`)

export const hideElement = (element: HTMLElement | JQuery<HTMLElement>) => {
    const $el = $(element);
    $el.each((index, el) => {
        if (el.ariaHidden) return;
        el.ariaHidden = "true";
    });
};

export const showElement = (element: HTMLElement | JQuery<HTMLElement>) => {
    const $el = $(element);
    $el.each((index, el) => {
        if (!el.ariaHidden) return;
        el.ariaHidden = null;
    });
};

export const fromJson = <T = object>(json: String | T | object | null | undefined): T | object => {
    try {
        if (!json || json === '') return {};
        if (typeof json === 'string') {
            return JSON.parse(json) as T ?? JSON.parse(json) as object;
        }
        return json;
    } catch (e) {
        return {};
    }
}
