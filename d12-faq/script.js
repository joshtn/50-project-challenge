/*
 * Bring in toggle buttons (queryselectorall)
 * Loop thorugh nodelist
 * add click
 * toggle the active class on the parent node using parentnode and classlist.toggle()
 */

const btns = document.querySelectorAll(".faq-toggle");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});
