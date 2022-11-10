import { component$ } from '@builder.io/qwik';

export default component$(() => {

  return (
    <header class="w-full bg-black text-white text-end flex justify-items-end items-center relative">
        <span class="text-sm ml-auto mr-20">© 2022 &lt; BRNJ.DEV/ &gt; </span>
        <span class="mr-4 text-2xl before:block before:h-[1px] before:w-14 before:bg-white before:top-[50%]
        before:absolute before:right-10"> &lt;</span>
    </header>
  );
});
