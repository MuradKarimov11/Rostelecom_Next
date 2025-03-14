import { closeSearchModal } from "@/context/modals";

export const removeOverflowHiddenFromBody = () => {
  const body = document.querySelector("body") as HTMLBodyElement;
  body.classList.remove("overflow-hidden");
};

export const addOverflowHiddenToBody = (paddingRight = "") => {
  const body = document.querySelector("body") as HTMLBodyElement;
  body.classList.add("overflow-hidden");
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  paddingRight && (body.style.paddingRight = paddingRight);
};

export const getWindowWidth = () => {
  const { innerWidth: windowWidth } =
    typeof window !== "undefined" ? window : { innerWidth: 0 };

  return { windowWidth };
};

export const handleCloseSearchModal = () => {
  closeSearchModal();
  removeOverflowHiddenFromBody();
};

export const formatPrice = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
