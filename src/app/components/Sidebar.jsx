'use client'

import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";;
import React, { useState, useMemo } from "react";
import { usePathname, useSearchParams } from 'next/navigation'
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faStopCircle } from "@fortawesome/free-solid-svg-icons";
import { faBell as farBell } from '@fortawesome/free-solid-svg-icons';
import { faUser as farUser } from '@fortawesome/free-solid-svg-icons';


const menuItems = [
  { id: 1, label: "Discussion Forum", icon: HomeIcon, link: "/", showicon: <FontAwesomeIcon className="transform rotate-90" icon={faCaretRight} style={{ fontSize: '10px', color: 'white' }} /> },
  { id: 2, label: "Market Stories", icon: ArticleIcon, link: "/" },
  { id: 3, label: "Sentiment", icon: "", link: "/" },
  { id: 4, label: "Market", icon: "", link: "/" },
  { id: 5, label: "Sector", icon: "", link: "/" },
  { id: 5, label: "Watchlist", icon: "", link: "/" },
  { id: 5, label: "Event", icon: "", link: "/" },
  { id: 5, label: "News/Interview", icon: null, link: "/" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(true);
  const [isCollapsible, setIsCollapsible] = useState(true);

  const router = useRouter();
  const pathname = usePathname()

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === pathname),
    [pathname]
  );

  const wrapperClasses = classNames(
    "h-screen  pt-8 pb-4 bg-slate-800 text-white justify-between flex-col",
    {
      ["w-60"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "pt-4 pb-4 px-2 py-2 rounded bg-light-lighter  right-0 ",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      " sidebars flex  items-center cursor-pointer hover:bg-red  rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div className="flex fixed z-10 md:relative md:z-0 ">
      {!toggleCollapse && <div
        className={wrapperClasses}
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOver}
        style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b border-blue-500 relative">
            <div className="flex items-center pl-1 gap-4 ">
              {/* <LogoIcon /> */}

              Hellow,User
              <FontAwesomeIcon icon={farUser} />
              <div className="relative bottom-3 ">
                <FontAwesomeIcon icon={farBell} className="absolute top-0 text-xl left-0" />
                <FontAwesomeIcon icon={faStopCircle} className="absolute top-0 left-[5px] text-red-500 text-sm" />
              </div>


            </div>

          </div>

          <div className="flex flex-col items-start mt-2">
            {menuItems.map(({ icon: Icon, ...menu }, id) => {
              const classes = getNavItemClasses(menu);
              return (
                <div className={classes} key={id} >
                  <Link href={menu.link}>
                    <div className="flex py-4 px-3 items-center w-full h-full">
                      <div style={{ width: "2.5rem" }}>
                        {Icon ? <Icon /> : null}
                      </div>
                      {!toggleCollapse && (
                        <span
                          className={classNames(
                            "text-md font-medium text-text-light"
                          )}
                        >
                          {menu.label}
                        </span>
                      )}
                    </div>
                  </Link>
                  <div className="hover:block active:block ">
                    {menu.showicon ?? menu.showicon}
                  </div>
                </div>
              );
            })}

          </div>

        </div>


      </div>}

      <div className="flex justify-center items-center bg-white h-screen " >
        <button className={`${collapseIconClasses} collapse_button bg-slate-800`}
          onClick={handleSidebarToggle}>
          {/* <CollapsIcon /> */}
          <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: '20px', color: 'white' }} />

        </button>
      </div>
    </div>
  );
};

export default Sidebar;
