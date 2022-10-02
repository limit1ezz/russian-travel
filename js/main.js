(() => {
  const languageBtns = document.querySelectorAll(".page-header__lang-link");

  function myFunction(e) {
    document.documentElement.setAttribute("lang", e.target.id);

    languageBtns.forEach((btn) => {
      btn.classList.remove("page-header__lang-link_active");
    });
    e.target.classList.add("page-header__lang-link_active");
  }

  languageBtns.forEach((btn) => {
    btn.addEventListener("click", myFunction);
  });
})();

