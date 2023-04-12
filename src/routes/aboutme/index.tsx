import { component$ } from "@builder.io/qwik";
import { geCurrentRouteIndex } from "~/utils/helpers";

export default component$(() => {
  const index = geCurrentRouteIndex();
  return (
    <div class="flex flex-col items-center xl:flex-row w-11/12 2xl:w-5/6 text-white-5">
      <h1 class="text-5xl tracking-mostwide my-4 xl:hidden">
        about me
        <span class="opacity-25">0{index}</span>
      </h1>
      <img
        class="max-w-[374px] max-h-[500px]"
        src="/assets/profile.png"
        alt="profile"
      ></img>
      <div class="flex flex-col xl:ml-20">
        <h1 class="hidden text-5xl tracking-mostwide xl:block">
          about me <span class="opacity-25">0{index}</span>
        </h1>
        <p class="mt-10 font-roboto">
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
          sed diam a erat posuere bibendum a eget ex. Aliquam mi risus, volutpat
          quis neque id, pretium rhoncus odio. Pellentesque a ullamcorper massa.
          Curabitur nec, bibendum urna ut, luctus dui. In dignissim rhoncus leo,
          in sagittis felis pellentesque sed
        </p>
        <p class="mt-10 font-roboto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non
          luctus nisl, imperdiet ultricies ligula. Pellentesque a scelerisque
          erat. Vestibulum lacus justo, pharetra a , euismod eu nulla. Vivamus
          lacus neque, porta in elit tempor, luctus porta eros. Vestibulum et
          justo pulvina
        </p>
        <hr class="mt-12"></hr>

        <h4 class="mt-10 text-xl">Tools & Technology that I use in my work</h4>
        <div class="mt-16 flex items-center justify-around">
          <img class="text-white-5" src="/assets/js.svg" alt="js"></img>
          <img
            class="text-white-5 w-14"
            src="/assets/qwik-logo-b.svg"
            alt="qwik"
          ></img>
          <img
            class="text-white-5 h-[47px]"
            src="/assets/html5.svg"
            alt="html"
          ></img>
          <img
            class="text-white-5"
            src="/assets/angular.svg"
            alt="angular"
          ></img>
          <img
            class="text-white-5 h-[62px]"
            src="/assets/rxjs.png"
            alt="rxjs"
          ></img>
        </div>
      </div>
    </div>
  );
});
