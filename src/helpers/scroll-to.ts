export const scrollTo = (id: string) => {
  const element_to_scroll_to = document.getElementById(id)!;
  element_to_scroll_to.scrollIntoView({ behavior: "smooth" });
};
