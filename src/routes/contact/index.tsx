import { component$ } from "@builder.io/qwik";
import { geCurrentRouteIndex } from "~/utils/helpers";

export default component$(() => {
  const index = geCurrentRouteIndex();
  return (
    <div
      class="min-h-[calc(100vh_-_96px)] flex w-5/6 justify-around items-center flex-col
    xl:flex-row"
    >
      <div class="flex flex-col text-white-5 xl:w-3/6">
        <h1 class="text-5xl tracking-mostwide self-center xl:self-auto">
          contact <span class="opacity-25">0{index}</span>
        </h1>
        <p class="mt-10 font-roboto">
          Got a project in your mind? We can create something unique together.
        </p>
        <h4 class="text-1xl mt-14">
          fill out the form below to make a contact with me...
        </h4>
        <form class="flex flex-col mt-14" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="cba152a4-02a7-4c36-89f0-b40ffd0a0e1f"/>
          <div class="flex justify-between">
            <fieldset class="relative max-w-[45%]">
              <input
                type="text"
                id="firstName"
                name="name"
                placeholder="dummy"
                class="appearance-none bg-transparent  border-b border-gray-5 w-full text-white-5 mr-3 py-1 px-2 leading-tight placeholder:text-gray-5 placeholder:text-right focus:outline-none placeholder:text-transparent focus:border-cyan-5 transition duration-500 pt-4 peer"
                aria-label="Full name"
                required
              />
              <label
                for="firstName"
                class="absolute top-4 right-3 text-gray-5 transition transform duration-500 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-cyan-5 peer-placeholder-shown:scale-100 scale-75
              peer-placeholder-shown:translate-y-0 -translate-y-6
              "
              >
                Name
              </label>
            </fieldset>

            <fieldset class="relative max-w-[45%]">
              <input
                type="text"
                id="email"
                placeholder="dummy"
                class="appearance-none bg-transparent  border-b border-gray-5 w-full text-white-5 mr-3 py-1 px-2 leading-tight placeholder:text-gray-5 placeholder:text-right focus:outline-none placeholder:text-transparent focus:border-cyan-5 transition duration-500 pt-4 peer"
                aria-label="Full name"
                name="email"
                required
              />
              <label
                for="email"
                class="absolute top-4 right-3 text-gray-5 transition transform duration-500 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-cyan-5 peer-placeholder-shown:scale-100 scale-75
           peer-placeholder-shown:translate-y-0 -translate-y-6
           "
              >
                E-mail
              </label>
            </fieldset>
          </div>
          <fieldset class="relative mt-4">
            <input
              type="text"
              id="subject"
              placeholder="dummy"
              class="appearance-none bg-transparent  border-b border-gray-5 w-full text-white-5 mr-3 py-1 px-2 leading-tight placeholder:text-gray-5 placeholder:text-right focus:outline-none placeholder:text-transparent focus:border-cyan-5 transition duration-500 pt-4 peer"
              aria-label="Full name"
              name="subject"
              required
            />
            <label
              for="subject"
              class="absolute top-4 right-3 text-gray-5 transition transform duration-500 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-cyan-5 peer-placeholder-shown:scale-100 scale-75
         peer-placeholder-shown:translate-y-0 -translate-y-6
         "
            >
              Subject
            </label>
          </fieldset>
          <fieldset class="relative mt-32">
            <textarea
              id="message"
              placeholder="s"
              class="appearance-none bg-transparent  border-b border-gray-5 w-full text-white-5 mr-3 py-1 px-2 leading-tight placeholder:text-gray-5 placeholder:text-right focus:outline-none focus:placeholder:text-transparent focus:border-cyan-5 transition duration-500 placeholder:text-transparent peer"
              aria-label="Full name"
              name="message"
              required
            ></textarea>
            <label
              for="message"
              class="absolute top-6 right-3 text-gray-5 transition transform duration-500 peer-focus:-translate-y-12 peer-focus:scale-75 peer-focus:text-cyan-5 peer-placeholder-shown:scale-100 scale-75 peer-placeholder-shown:translate-y-0 -translate-y-12
              "
            >
              Message
            </label>
          </fieldset>
          <fieldset class="flex items-center mt-4">
            <input
              type="checkbox"
              id="terms"
              class=" appearance-none accent-cyan-5 w-4 h-4
            border-solid border-2 border-gray-5 checked:bg-cyan-5"
            required
            ></input>
            <label for="terms" class="text-gray-5 ml-3 text-sm">
              I accept the Terms and Conditions.
            </label>
          </fieldset>
          <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
          <button class="bg-cyan-5 px-6 xl:px-10 py-3.5 shadow-btn text-black-5 mt-16 hover:bg-white hover:shadow-hoverbtn duration-500 w-44 xl:w-56"
          type="submit">
            send message
          </button>
        </form>
      </div>
      <div class="flex flex-col items-center justify-center">
        <h4 class="text-1xl text-white-5 mb-10 xl:mb-20">
          ...or connect with me on social medias:
        </h4>

        <div class="flex justify-center">
          <a href="https://twitter.com/iBrunoj" target="blank">
            <img
              class="w-8 px-3 box-content border-r-2 hover:cursor-pointer"
              src="/assets/linkedinblue.svg"
              alt="twitter"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-jamu%C5%82a-98402a200/"
            target="blank"
          >
            <img
              class="w-8 px-3 box-content hover:cursor-pointer"
              src="/assets/githblue.svg"
              alt="linkedin"
            ></img>
          </a>
          <a href="https://www.instagram.com/brunoj0/" target="blank">
            <img
              class="w-8 px-3 box-content border-l-2 hover:cursor-pointer"
              src="/assets/instblue.svg"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
});
