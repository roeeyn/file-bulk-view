import { checkElements } from "@/lib";

const createItemButton = (
  name: string,
  callback: () => any
): HTMLLabelElement => {
  const btnLabel = document.createElement("label");
  btnLabel.classList.add("SelectMenu-item");

  const btn = document.createElement("input");
  btn.type = "button";
  btn.value = name;
  btn.classList.add("btn", "btn-sm");
  btnLabel.appendChild(btn);

  btn.addEventListener("click", callback);

  return btnLabel;
};

const createFilterInput = (
  callback: (regexFilter: string) => any
): HTMLLabelElement => {
  const filterLabel = document.createElement("label");
  filterLabel.classList.add("SelectMenu-item");

  const textInput = document.createElement("input");
  textInput.type = "text";

  const btnInput = document.createElement("input");
  btnInput.type = "button";
  btnInput.value = "Mark";
  btnInput.classList.add("btn", "btn-sm", "ml-2");

  filterLabel.appendChild(textInput);
  filterLabel.appendChild(btnInput);

  btnInput.addEventListener("click", () => {
    callback(textInput.value);
    textInput.value = "";
  });

  return filterLabel;
};

const createDivider = (): HTMLDivElement => {
  const divider = document.createElement("hr");
  divider.classList.add("SelectMenu-divider");
  return divider;
};

const createDividerLabel = (name: string): HTMLLabelElement => {
  const label = document.createElement("label");
  label.classList.add("SelectMenu-item");

  const span = document.createElement("span");
  span.classList.add("color-fg-muted", "no-underline");
  span.textContent = name;

  label.appendChild(span);

  return label;
};

export const createButtonList = (): HTMLFormElement => {
  const viewAllLabel = createItemButton("Mark all files as viewed", () => {
    checkElements({ view: true });
  });

  const unviewAllLabel = createItemButton("Mark all files as unviewed", () => {
    checkElements({ unview: true });
  });

  const listForm = document.createElement("form");
  listForm.appendChild(viewAllLabel);
  listForm.appendChild(unviewAllLabel);

  listForm.appendChild(
    createDividerLabel("Mark regex matched files as viewed")
  );
  listForm.appendChild(createDivider());
  listForm.appendChild(
    createFilterInput((filter: string) => {
      checkElements({ view: true, filters: filter });
    })
  );

  listForm.appendChild(
    createDividerLabel("Mark regex matched files as unviewed")
  );
  listForm.appendChild(createDivider());
  listForm.appendChild(
    createFilterInput((filter: string) => {
      checkElements({ unview: true, filters: filter });
    })
  );

  return listForm;
};
