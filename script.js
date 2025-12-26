const textarea = document.querySelector("textarea");
const article = document.querySelector(".article");
const clearBtn = document.getElementById("clearBtn");

// Update article as you type or paste
textarea.addEventListener("input", () => {
  article.textContent = textarea.value;
});

// Clear textarea and article on button click
clearBtn.addEventListener("click", () => {
  textarea.value = "";
  article.textContent = "";
  textarea.focus(); // optional: puts cursor back in textarea
});
