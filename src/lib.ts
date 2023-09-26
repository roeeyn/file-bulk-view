type CheckConfig =
  | {
      view: boolean;
      unview?: never;
      filters?: string;
    }
  | {
      view?: never;
      unview: boolean;
      filters?: string;
    };

function matchesPattern(str: string, pattern: string): boolean {
  // Convert wildcard pattern to a regex pattern
  const regexPattern = new RegExp(`^${pattern.split("*").join(".*")}$`);

  // Test the regex pattern against the string
  return regexPattern.test(str);
}

export const checkElements = ({ view, unview, filters }: CheckConfig) => {
  const viewedElements = document.getElementsByName("viewed");

  // mark regex search matches
  if (filters) {
    const rootElements = Array.from(viewedElements).map(
      (element) =>
        element?.parentElement?.parentElement?.parentElement?.parentElement
          ?.parentElement?.parentElement
    );
    rootElements
      .filter((el) => !!el)
      .map((el) => el as HTMLElement)
      .forEach((rootElement) => {
        const potentialHeader = rootElement.getElementsByClassName("Truncate");
        const fileName =
          potentialHeader.length > 0
            ? (potentialHeader[0] as HTMLElement).innerText
            : null;

        if (!fileName) {
          // This should never happen
          return;
        }

        if (matchesPattern(fileName, filters)) {
          const checkElements = rootElement.getElementsByClassName(
            "js-reviewed-checkbox"
          );
          const checkElement =
            checkElements.length > 0
              ? (checkElements[0] as HTMLInputElement)
              : null;

          if (!checkElement) {
            // This should never happen
            return;
          }

          if (
            (view && !checkElement.checked) ||
            (unview && checkElement.checked)
          ) {
            checkElement.click();
          }
        }
      });

    return;
  }

  // mark ALL files
  viewedElements.forEach((ch) => {
    const checkElement = ch as HTMLInputElement;

    if ((view && !checkElement.checked) || (unview && checkElement.checked)) {
      checkElement.click();
    }
  });
};
