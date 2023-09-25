export const createSummary = (): HTMLElement => {
    const summary = document.createElement('summary')
    summary.classList.add('btn', 'btn-sm')
    summary.textContent = 'Bulk view files'

    return summary
}
