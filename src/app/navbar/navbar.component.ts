import { Component } from '@angular/core';


@Component({
  selector: 'navbar',
  template: `
  <div class="relative">
  <div class="max-w-full mx-auto bg-transparent px-4 md:px-10 lg:px-20 xl:px-36 sticky md:sticky top-0 z-40">
    <div class="lg:flex justify-between items-center text-center py-5">
      <div class="flex lg:justify-start justify-center mb-5 lg:mb-0">
        <div class="text-[#EA0A8E] font-medium text-lg">
          <a href="/homepage">Home</a>
        </div>

        <div class="text-[#EA0A8E] font-medium px-10 text-lg">
          <a href="/news">About</a>
        </div>

        <div class="text-[#EA0A8E] font-medium text-lg">
          <a href="/press-release">Contact</a>
        </div>
      </div>

      <div class="mb-5 lg:mb-0">
        <p class="text-3xl font-bold text-[#EA0A8E]">GIGA T-MOBILE</p>
      </div>

      <div>
        <a href="form"><button class="rounded-none bg-[#EA0A8E] text-white px-10 py-1">Request Fiber</button></a>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [
    `

    `
  ]
})
export class Navbar {

}
