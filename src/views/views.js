function getViews(viewId) {

    let allViewsElements = Array.from(document.querySelectorAll('.view'))

    allViewsElements.map(el => el.style.display = 'none');

    if (viewId !== undefined) {

        let currEl = allViewsElements.find(el => el.id === viewId);
        currEl.style.display = 'block';
        return;
    }

    let currEl = allViewsElements.find(el => el.id === 'home-page');
    currEl.style.display = 'block';

}

export default getViews;
