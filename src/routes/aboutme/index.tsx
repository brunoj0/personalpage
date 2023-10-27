import { component$ } from "@builder.io/qwik";
import { geCurrentRouteIndex } from "~/utils/helpers";
import ImgProfile from '~/media/profile.png?jsx'
import JsSvg from '~/media/js.svg?jsx'
import HtmlImage from '~/media/html5.svg?jsx'
import QwikImage from '~/media/qwik-logo-b.svg?jsx'
import AngularImage from '~/media/angular.svg?jsx'
import RxjsImage from '~/media/rxjs.png?jsx'

export default component$(() => {
  const index = geCurrentRouteIndex();
  return (
    <div class="flex flex-col items-center min-h-screen xl:flex-row w-11/12 2xl:w-5/6 2xl:max-w-[1200px] text-white-5">
      <h1 class="text-5xl tracking-mostwide my-4 xl:hidden">
        about me
        <span class="opacity-25">0{index}</span>
      </h1>
      <ImgProfile class="max-w-[374px] max-h-[500px]"
        alt="profile"
        />
      <div class="flex flex-col xl:ml-20">
        <h1 class="hidden text-5xl tracking-mostwide xl:block">
          about me <span class="opacity-25">0{index}</span>
        </h1>
        <p class="mt-10 font-roboto">
            My name is Bruno Jamuła, and I'm passionate about creating beautiful, responsive websites that provide engaging user experiences. With years of experience in the industry, I've honed my skills in HTML, CSS, JavaScript, Angular and other web technologies to deliver exceptional results for my clients.
        </p>
        <p class="mt-10 font-roboto">
            Whether you're looking for a new website for your business or personal brand, or you need help optimizing an existing site, I'm here to help. I take a collaborative approach to every project, working closely with my clients to understand their goals and deliver a final product that exceeds their expectations
        </p>

        {/* <p class="mt-10 font-roboto">
            On this website, you'll find examples of my past work, testimonials from satisfied clients, and information about my skills and experience.
            In the past I worked with
        </p> */}

        <hr class="mt-12"></hr>

        <h4 class="mt-10 text-xl">Tools & Technology that I use in my work</h4>
        <div class="mt-16 flex items-center justify-around pb-10">
          <JsSvg class="text-white-5" alt="js"/>
          <QwikImage
            class="text-white-5 w-14"
            alt="qwik"
          ></QwikImage>
          <HtmlImage
            class="text-white-5 h-[47px]"
            alt="html"
          ></HtmlImage>
          <AngularImage
            class="text-white-5"
            alt="angular"
          />
          <RxjsImage
            class="text-white-5 h-[62px] w-auto"
            alt="rxjs"
          ></RxjsImage>
        </div>
      </div>
    </div>
  );
});
