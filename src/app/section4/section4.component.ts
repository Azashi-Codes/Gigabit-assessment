import { Component } from '@angular/core';

@Component({
  selector: 'section4',
  template: `
  <div class="lg:grid grid-cols-2 gap-4 mt-40">
    <div class="flex lg:block justify-center">
      <img src="/assets/section4.png" alt="image">
    </div>

    <div class="mt-5">
      <p class="text-4xl font-semibold leading-[4rem]">Light, Fast & Powerful</p>

      <p class="mt-8">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
      <p class="mt-3">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

      <button class="rounded-none bg-[#EA0A8E] text-white px-10 py-1 mt-8">Request Fiber</button>
    </div>
</div>
  `,
  styles: [
    `

    `
  ]
})
export class Section4 {

}
