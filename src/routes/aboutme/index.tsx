import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="flex w-5/6">
        <img src='/assets/profile.png' alt="profile"></img>
        <div class="flex flex-col text-white-5 ml-20">
            <h1 class="text-5xl">about me</h1>
            <p class="mt-10 font-roboto">Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sed diam a erat posuere bibendum a eget ex. Aliquam mi risus, volutpat quis neque id, pretium rhoncus odio. Pellentesque a ullamcorper massa. Curabitur nec, bibendum urna ut, luctus dui. In dignissim rhoncus leo, in sagittis felis pellentesque sed</p>
            <p class="mt-10 font-roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non luctus nisl, imperdiet ultricies ligula. Pellentesque a scelerisque erat. Vestibulum lacus justo, pharetra a , euismod eu nulla. Vivamus lacus neque, porta in elit tempor, luctus porta eros. Vestibulum et justo pulvina</p>
            <hr class="mt-12"></hr>

            <h4 class="mt-10 text-xl">Tools & Technology that I use in my work</h4>
            <div class="mt-16 flex items-center justify-around">
                <img class="text-white-5" src="/assets/js.svg" alt="js"></img>
                <img class="text-white-5 w-14" src="/assets/qwik-logo-b.svg" alt="qwik"></img>
                <img class="text-white-5 h-[47px]" src="/assets/html5.svg" alt="html"></img>
                <img class="text-white-5" src="/assets/angular.svg" alt="angular"></img>
                <img class="text-white-5 h-[62px]" src="/assets/rxjs.png" alt="rxjs"></img>

            </div>
        </div>
    </div>

  );
});
