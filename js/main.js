(() => {
  const languageBtns = document.querySelectorAll(".page-header__lang-btn");

  function myFunction(e) {
    document.documentElement.setAttribute("lang", e.target.id);

    languageBtns.forEach((btn) => {
      btn.classList.remove("page-header__lang-btn_active");
    });
    e.target.classList.add("page-header__lang-btn_active");
  }

  languageBtns.forEach((btn) => {
    btn.addEventListener("click", myFunction);
  });
})();

