"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import myAvatar from "../../../public/assets/images/myAvatar.jpg";
import f8 from "../../../public/assets/images/f8.jpg";
import { Button } from "@nextui-org/react";
import "./Header.scss";
import { themeSlice } from "@/redux/slice/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const { light, dark } = themeSlice.actions;

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import viMsg from "../../../messages/vi.json";
import enMsg from "../../../messages/en.json";

import { usePathname, useRouter } from "next/navigation";

i18n.use(initReactI18next).init({
  resources: {
    vi: {
      translation: viMsg,
    },
    en: {
      translation: enMsg,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function Header() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const headerRef = useRef();

  const { t } = useTranslation();

  const [language, setLanguage] = useState("vi");

  const handleTheme = () => {
    if (theme === "light") {
      dispatch(dark());
    }
    if (theme === "dark") {
      dispatch(light());
    }
  };

  useLayoutEffect(() => {
    const themeLocale = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light";
    const langLocale = localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : "en";
    if (langLocale === "vi") {
      i18n.changeLanguage("vi");
    }
    if (langLocale === "en") {
      i18n.changeLanguage("en");
    }
    if (themeLocale === "light") {
      dispatch(dark());
    }
    if (themeLocale === "dark") {
      dispatch(light());
    }
    // if (pathname === "/en") {
    //   i18n.changeLanguage("en");
    // }
    // if (pathname === "/vi") {
    //   i18n.changeLanguage("vi");
    // }
  }, []);
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.backgroundColor = "#fff";
      document.documentElement.style.color = "#000";
      headerRef.current.style.backgroundColor = "whitesmoke";
      headerRef.current.style.color = "#000";
    }
    if (theme === "dark") {
      document.documentElement.style.backgroundColor = "#000";
      document.documentElement.style.color = "#fff";
      headerRef.current.style.backgroundColor = "#000000e2";
      headerRef.current.style.color = "#fff";
    }
  }, [theme]);

  const handleLang = (value) => {
    if (value === "vi") {
      i18n.changeLanguage("vi");
      localStorage.setItem("lang", "vi");
      // router.push("/vi", undefined, { shallow: true });
      // setCookie("lang", "vi");
      setLanguage("en");
    }
    if (value === "en") {
      i18n.changeLanguage("en");
      localStorage.setItem("lang", "en");
      // router.push("/en", undefined, { shallow: true });
      // setCookie("lang", "en");
      setLanguage("vi");
    }
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="header-content">
        <nav className="navigation">
          <Link
            href={"/"}
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            <Image src={myAvatar} width={50} alt="avatar" />
            <span className="name">{t("Index.name")}</span>
            <span className="home-nav">Home</span>
          </Link>
        </nav>
        <div className="contact">
          <div className="f8-avatar">
            <Link
              href={"https://fullstack-nodejs.fullstack.edu.vn/"}
              target="_blank"
            >
              <Image src={f8} width={30} alt="logo" />
            </Link>
          </div>
          <div className="facebook-icon">
            <Link href={"https://www.facebook.com/anunicode"} target="_blank">
              <i className="pi pi-facebook"></i>
            </Link>
          </div>
          <div className="youtube-icon">
            <Link
              href={"https://www.youtube.com/@F8VNOfficial"}
              target="_blank"
            >
              <i className="pi pi-youtube"></i>
            </Link>
          </div>
          <div className="theme-icon">
            {theme === "light" ? (
              <i
                className="pi pi-moon"
                onClick={() => {
                  handleTheme();
                }}
              ></i>
            ) : (
              <i
                className="pi pi-sun"
                onClick={() => {
                  handleTheme();
                }}
              ></i>
            )}
          </div>
          <Button
            size="md"
            color="success"
            onClick={(e) => {
              e.preventDefault();
              handleLang(e.target.innerText);
            }}
          >
            {language}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
