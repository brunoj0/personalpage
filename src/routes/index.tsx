import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
        <div class="text-white w-228">
            <h4>Hi,</h4>
            <h1 class="text-4xl">My name is BRUNO</h1>
            <h2 class="text-3xl text-cyan-5 mt-6 tracking-widest">I am a front-end developer</h2>
            <p class="mt-8">Lorem ipsum dolor sit amet. Quisque sagittis, justo eget iaculis porttitor, arcu turpis varius elit, sit amet tempus massa massa id enim. Nulla nec orci condimentum.</p>
            <button class="bg-cyan-5 px-10 py-3.5 shadow-btn text-black-5 mt-16 hover:bg-white hover:shadow-hoverbtn duration-500">
                read my blog</button>
        </div>

  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
