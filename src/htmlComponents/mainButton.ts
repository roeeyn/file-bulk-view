export const createMainButton = (detailsElement: HTMLDetailsElement): HTMLDivElement => {
    const mainDiv = document.createElement('div')
    mainDiv.classList.add('diffbar-item', 'dropdown', 'js-reviews-container', 'mr-3')
    mainDiv.appendChild(detailsElement)
    return mainDiv
}
