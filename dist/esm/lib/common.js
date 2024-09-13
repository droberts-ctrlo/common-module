export const hideElement = (element) => {
    $(element).each((_, el) => {
        if (el.classList.contains('hidden'))
            return;
        el.classList.add('hidden');
        el.setAttribute('aria-hidden', 'true');
    });
};
export const showElement = (element) => {
    $(element).each((_, el) => {
        if (!el.classList.contains('hidden'))
            return;
        el.classList.remove('hidden');
        el.removeAttribute('aria-hidden');
    });
};
export const fromJson = (json) => {
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
