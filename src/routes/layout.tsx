import { component$, Slot } from "@builder.io/qwik";
import Sidebar from "~/components/sidebar/sidebar";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <div class="flex h-full">
        <Sidebar></Sidebar>
        <main class="flex flex-col w-full">
          <Header />
          <section class="h-full bg-black-5 bg-hero-pattern bg-center bg-no-repeat flex justify-center items-center">
            <Slot />
          </section>
        </main>
      </div>
    </>
  );
});
