import ImgLogoLinkedin from "~/media/assets/logo-linkedin.svg?jsx";
import ImgGithubLogo from "~/media/assets/github-logo.svg?jsx";
import ImgLogoInstagram from "~/media/assets/logo-instagram.svg?jsx";
import ImgLogo from "~/media/LOGO.png?jsx";
import { component$ } from "@builder.io/qwik";
import { useContent, useLocation } from "@builder.io/qwik-city";
import { SideBarStore } from "~/routes/layout";

interface SidebarProps {
  store: SideBarStore;
}

export default component$((props: SidebarProps) => {
  const { menu } = useContent();
  const { url } = useLocation();
  return (
    <div class="absolute flex flex-col justify-between px-8 xl:px-24 bg-white z-10 w-full xl:w-auto xl:flex xl:relative">
      <div>
        <div class="logo py-2 xl:mt-11">
          <img
            alt="logo"
            srcSet="/assets/logo_mobile.svg 480w,
            /assets/LOGO.png 800w"
            sizes="(max-width: 1280px) 480px,
            800px"
            src="/assets/LOGO.png"
          ></img>
        </div>
        <div class="container nav-container xl:hidden">
          <input
            onClick$={() =>
              (props.store.isSidebarOpen = !props.store.isSidebarOpen)
            }
            class="checkbox"
            type="checkbox"
            name=""
            id=""
            aria-label="menu"
          />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
        </div>
      </div>
      <div
        class={{
          "max-h-screen flex": props.store.isSidebarOpen,
          "max-h-0": !props.store.isSidebarOpen,
          "flex flex-col items-center justify-between transition-all duration-500 ease-out overflow-hidden xl:max-h-fit xl:overflow-visible h-[calc(100vh-60px)] xl:h-[60%]":
            true,
        }}
      >
        <ul class="pt-48 xl:pt-0">
          {menu
            ? menu.items?.map((el, index) => {
                return (
                  // eslint-disable-next-line qwik/jsx-key
                  <li class="mb-8">
                    <a
                      class={{
                        "font-audio text-lg": true,
                        "text-black-5": url.pathname === el.href,
                        "text-gray-5 hover:cursor-pointer":
                          url.pathname !== el.href,
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
          <a href="https://github.com/brunoj0" target="blank">
            <ImgGithubLogo
              class="w-8 px-3 box-content border-r-2 hover:cursor-pointer"
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-jamu%C5%82a-98402a200/"
            target="blank"
          >
            <ImgLogoLinkedin
              class="w-8 px-3 box-content hover:cursor-pointer"
              alt="linkedin"
            />
          </a>
          <a href="https://www.instagram.com/brunoj0/" target="blank">
            <ImgLogoInstagram
              class="w-8 px-3 box-content border-l-2 hover:cursor-pointer"
              alt="instagram"
            />
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
