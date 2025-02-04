"use client";

import Link from "next/link";
import Logo from "@/components/elements/Logo/Logo";
import { useLang } from "@/hooks/useLang";

import Menu from "./Menu";
import { openMenu, openSearchModal } from "@/context/modals";
import { addOverflowHiddenToBody } from "@/lib/utils/common";
import CartPopup from "./CartPopup/CartPopup";

// import "@/app/globalStyles/header.css";

const Header = () => {
  const { lang, translations } = useLang();

  const handleOpenMenu = () => {
    addOverflowHiddenToBody();
    openMenu();
  };

  const handleOpenSearchModal = () => {
    openSearchModal();
    addOverflowHiddenToBody();
  };

  return (
    <header className="header">
      <div className="container header__container">
        <button className="btn-reset header__burger" onClick={handleOpenMenu}>
          {translations[lang].header.menu_btn}
        </button>

        <Menu />

        <div className="header__logo">
          <Logo />
        </div>

        <ul className="header__links list-reset">
          <li className="header__links__item">
            <button
              className="header__links__item__btn header__links__item__btn--search"
              onClick={handleOpenSearchModal}
            />
          </li>

          <li className="header__links__item">
            <Link
              href="/favorites"
              className="header__links__item__btn header__links__item__btn--favorites"
            />
          </li>

          <li className="header__links__item">
            <Link
              className="header__links__item__btn header__links__item__btn--compare"
              href="/comparison"
            />
          </li>

          <li className="header__links__item">
            <CartPopup />
          </li>

          <li className="header__links__item">
            <Link
              href="/profile"
              className="btn-reset header__links__item__btn header__links__item__btn--profile"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
