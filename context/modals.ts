import { createDomain } from "effector/effector.mjs";

const modals = createDomain();

export const openMenu = modals.createEvent();
export const closeMenu = modals.createEvent();
export const openCatalogMenu = modals.createEvent();
export const closeCatalogMenu = modals.createEvent();
export const openSearchModal = modals.createEvent();
export const closeSearchModal = modals.createEvent();

export const $menuIsOpen = modals
  .createStore(false)
  .on(openMenu, () => true)
  .on(closeMenu, () => false);

export const $catalogMenuIsOpen = modals
  .createStore(false)
  .on(openCatalogMenu, () => true)
  .on(closeCatalogMenu, () => false);

export const $SearchModal = modals
  .createStore(false)
  .on(openSearchModal, () => true)
  .on(closeSearchModal, () => false);
