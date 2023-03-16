import { component$, useStore } from "@builder.io/qwik";
import { useContent, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const { menu } = useContent();
  const { pathname } = useLocation();
  const sidebar = useStore({sidebarOpen: false});
  return (

    <div class="flex flex-col justify-between px-8 xl:px-24 bg-white absolute z-10 w-full xl:w-auto xl:flex xl:relative">
      <div>
        <div class="logo py-2 xl:mt-11">
          <img
          alt="logo"
            srcSet="/assets/logo_mobile.svg 480w,
            /assets/LOGO.png 800w"
            sizes="(max-width: 1280px) 480px,
            800px"
          src="/assets/LOGO.png"></img>
        </div>
        <div class="container nav-container xl:hidden">
            <input onClick$={() => sidebar.sidebarOpen = !sidebar.sidebarOpen} class="checkbox" type="checkbox" name="" id="" aria-label="menu" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            </div>
      </div>
      <div class={{
        "max-h-screen flex": sidebar.sidebarOpen,
        "max-h-0": !sidebar.sidebarOpen,
        "flex flex-col items-center justify-between transition-all duration-500 ease-out overflow-hidden xl:max-h-fit xl:overflow-visible h-[calc(100vh-59px-32px)] xl:h-[60%]": true,
      }} >
        <ul class="pt-48 xl:pt-0">
          {menu
            ? menu.items?.map((el, index) => {
                return (
                  <li class="mb-8">
                    <a
                      class={{
                        "font-audio text-lg": true,
                        "text-black-5": pathname === el.href,
                        "text-gray-5 hover:cursor-pointer":
                          pathname !== el.href,
                      }}
                      href={el.href}
                    >
                      <span> {">"} </span>
                      <span class="mx-4">0{index + 1}</span> {el.text}
                    </a>
                  </li>
                );
              })
            : ""}
        </ul>
        <div class="flex justify-center">
          <a href="https://twitter.com/iBrunoj" target="blank">
            <img
              class="w-8 px-3 box-content border-r-2 hover:cursor-pointer"
              src="/assets/github-logo.svg"
              alt="twitter"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-jamu%C5%82a-98402a200/"
            target="blank"
          >
            <img
              class="w-8 px-3 box-content hover:cursor-pointer"
              src="/assets/logo-linkedin.svg"
              alt="linkedin"
            ></img>
          </a>
          <a href="https://www.instagram.com/brunoj0/" target="blank">
            <img
              class="w-8 px-3 box-content border-l-2 hover:cursor-pointer"
              src="/assets/logo-instagram.svg"
              alt="instagram"
            ></img>
          </a>
        </div>

        <div class="flex justify-between mb-20">
          <div class="w-28 text-center text-gray-5 text-sm -ml-6">
            Terms & Conditions
          </div>
          <div class="w-28 text-center text-gray-5 text-sm -mr-6">
            Designed by OUXUI
          </div>
        </div>
      </div>
    </div>

  );
});
