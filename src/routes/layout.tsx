import { component$, Slot, useStore } from "@builder.io/qwik";
import Sidebar from "~/components/sidebar/sidebar";
import Header from "../components/header/header";
export interface SideBarStore {
    isSidebarOpen: boolean;
}

export default component$(() => {
    const store = useStore<SideBarStore>({ isSidebarOpen: false });

  return (
    <>
      <div class={{
        "overflow-hidden": store.isSidebarOpen,
        "flex h-full flex-col xl:flex-row": true}}>
        <Sidebar store={store} ></Sidebar>
        <main class="pt-16 xl:pt-0 flex flex-col-reverse xl:flex-col w-full">
          <Header/>
          <section class="h-full bg-black-5 bg-hero-pattern bg-center bg-no-repeat flex justify-center items-center">
            <Slot />
          </section>
        </main>
      </div>
    </>
  );
});
