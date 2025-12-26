const textarea = document.querySelector("textarea");
const article = document.querySelector(".article");

textarea.addEventListener("input", () => {
  article.textContent = textarea.value;
});
