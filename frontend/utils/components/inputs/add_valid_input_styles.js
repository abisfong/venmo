import getInputElements from "./get_input_elements";

export default function addValidInputStyles(inputEl) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getInputElements(inputEl);
  inputContainerEl.classList.remove('input-error');
  inputContainerEl.classList.add('input-valid');
  inputErrorTextEl.innerHTML = '';
}