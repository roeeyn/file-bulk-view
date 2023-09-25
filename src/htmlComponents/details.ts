import { createSummary } from '@/htmlComponents/summary';

export const createDetails = (listForm: HTMLFormElement): HTMLDetailsElement => {
    const detailsMenu = document.createElement('details-menu')
    detailsMenu.classList.add('SelectMenu')

    const detailsMenuModal = document.createElement('div')
    detailsMenuModal.classList.add('SelectMenu-modal')
    detailsMenu.appendChild(detailsMenuModal)

    const detailsMenuHeader = document.createElement('header')
    detailsMenuHeader.classList.add('SelectMenu-header')
    detailsMenuModal.appendChild(detailsMenuHeader)

    const detailsMenuTitle = document.createElement('h3')
    detailsMenuTitle.classList.add('SelectMenu-title')
    detailsMenuHeader.appendChild(detailsMenuTitle)
    detailsMenuTitle.textContent = 'View/Unview multiple files at once'

    const detailsMenuList = document.createElement('div')
    detailsMenuList.classList.add('SelectMenu-list', 'SelectMenu-list--borderless')
    detailsMenuModal.appendChild(detailsMenuList)

    detailsMenuList.appendChild(listForm)

    const details = document.createElement('details')
    details.classList.add('details-reset', 'details-overlay', 'd-inline-block', 'position-relative')
    details.appendChild(createSummary())
    details.appendChild(detailsMenu)

    return details
}
