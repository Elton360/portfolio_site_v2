const scrollToSection = (e, id) => {
  e?.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY + -60;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export default scrollToSection;
