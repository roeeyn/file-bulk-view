import { createMainButton } from '@/htmlComponents/mainButton';
import { createDetails } from '@/htmlComponents/details';
import { createButtonList } from '@/htmlComponents/detailsList';

const potentialContainers = document.getElementsByClassName('pr-review-tools')
const toolsContainer = potentialContainers.length > 0 ? potentialContainers[0] as HTMLElement : null

console.log("Hello from the content script", toolsContainer)

if (toolsContainer) {
    const listForm = createButtonList()
    const mainDiv = createMainButton(createDetails(listForm));
    const firstChild = toolsContainer.firstElementChild;

    if (firstChild) {
        toolsContainer.insertBefore(mainDiv, firstChild);
    } else {
        toolsContainer.appendChild(mainDiv);
    }
}

