export function clear(...params) {

    params.forEach(el => {
        if (el.tagName === 'INPUT') {
            el.value = '';
        }

        else {
            el.textContent = '';
        }
    });

    return params;
}