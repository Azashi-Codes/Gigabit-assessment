import { Component } from '@angular/core';

@Component({
  selector: 'banner',
  template: `
  <div class="lg:grid grid-cols-2 gap-4 mt-40">
  <div>
  <p class="text-5xl font-semibold leading-[4rem] mt-72 md:mt-[45rem] lg:mt-[0rem]">Introduce Your Product<br/> Quickly & Effectively</p>

  <p class="mt-8">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
  <p class="mt-3">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

  <button class="rounded-none bg-[#EA0A8E] text-white px-10 py-1 mt-14 mr-10">Request Fiber</button>

  <button class="rounded-none font-medium border-[2px] border-black px-10 py-1 mt-14">Learn More</button>
  </div>

  <div>
  <img class="absolute top-16 md:top-0 right-0 lg:w-[70%]" src="/assets/designer_1.png" alt="image">
  </div>
</div>
  `,
  styles: [
    `

    `
  ]
})
export class Banner {

}
