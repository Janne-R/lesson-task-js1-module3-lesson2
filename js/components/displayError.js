//question 2

function acceptsTwoParameters(type = "success", message = "hello") {
  const html = `<div class="new-div" ${type}">${message}</div>`;
  return html;
}