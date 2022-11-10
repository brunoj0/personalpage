import { component$ } from "@builder.io/qwik";
import { useContent, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const { menu } = useContent();
  const { pathname } = useLocation();
  console.log(menu);
  const basicClass ="font-audio text-gray-5 text-lg"

  return (
    <div class="flex flex-col justify-between w-96 px-24">
      <div class="logo mt-11">
        <img src="/assets/LOGO.png"></img>
      </div>
      <div class="h-[60%] flex flex-col justify-between">
        <ul>
          {menu
            ? menu.items?.map((el, index) => {
                return (
                  <li class="mb-8">
                    <a
                      class={
                        {
                          "font-audio text-lg": true,
                          "text-black-5": pathname === el.href,
                          "text-gray-5 hover:cursor-pointer": pathname !== el.href,
                        }
                      }
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
          <a href="https://twitter.com/iBrunoj" target="blank"><img
            class="w-8 px-3 box-content border-r-2 hover:cursor-pointer"
            src="/assets/github-logo.svg"
            alt="twitter"
          ></img></a>
          <a href="https://www.linkedin.com/in/bruno-jamu%C5%82a-98402a200/" target="blank"><img
            class="w-8 px-3 box-content hover:cursor-pointer"
            src="/assets/logo-linkedin.svg"
            alt="linkedin"
          ></img></a>
          <a href="https://www.instagram.com/brunoj0/" target="blank"><img
            class="w-8 px-3 box-content border-l-2 hover:cursor-pointer"
            src="/assets/logo-instagram.svg"
            alt="instagram"
          ></img></a>
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
