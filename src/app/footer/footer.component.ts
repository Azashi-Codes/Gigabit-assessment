import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  template: `
  <div class="bg-[#FFE7FD] px-4 md:px-10 lg:px-20 xl:px-36">
    <div class="lg:flex justify-between items-center text-center py-10">
        <div>
          <p class="text-xs text-center lg:text-left mb-5 lg:mb-0">2023 AmaliTech Giga</p>
        </div>

        <div>
          <p class="text-xl font-bold text-[#EA0A8E] mb-5 lg:mb-0">T-MOBILE</p>
        </div>

        <div>
          <button class="rounded-none bg-[#EA0A8E] text-white px-10 py-1 mb-5 lg:mb-0">Order Now</button>
        </div>
      </div>

      <hr class="border-[1px] border-[#CDD1D4]"/>

      <div class="flex justify-between items-center py-5">
      <div class="flex justify-start">
        <div class="text-[#EA0A8E] font-medium text-xs">
          <a href="/homepage">Home</a>
        </div>

        <div class="text-[#EA0A8E] font-medium px-7 text-xs">
          <a href="/news">About</a>
        </div>

        <div class="text-[#EA0A8E] font-medium text-xs">
          <a href="/press-release">Contact</a>
        </div>
      </div>

      <div class="flex items-center">
        <img class="px-2" src="/assets/facebook.png" alt="image">
        <img class="px-2" src="/assets/linkedin.png" alt="image">
        <img class="px-2" src="/assets/twitter.png" alt="image">
        <img class="px-2" src="/assets/youtube.png" alt="image">
        <img class="px-2" src="/assets/instagram.png" alt="image">
      </div>
    </div>
    </div>
  `,
  styles: [
    `

    `
  ]
})
export class Footer {

}
