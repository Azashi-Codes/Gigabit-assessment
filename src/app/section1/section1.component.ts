import { Component } from '@angular/core';

@Component({
  selector: 'section1',
  template: `
  <div class="lg:grid grid-cols-2 gap-4 mt-40">
    <div>
      <p class="text-4xl font-semibold leading-[4rem]">Light, Fast & Powerful</p>

      <p class="mt-8">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
      <p class="mt-3">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

      <div class="grid grid-cols-2 gap-4 mt-16">
        <div>
          <img src="/assets/section1icon1.png" alt="image">
          <p class="my-5 text-sm font-semibold">Title Goes Here</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
        </div>

        <div>
          <img src="/assets/section1icon1.png" alt="image">
          <p class="my-5 text-sm font-semibold">Title Goes Here</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <img src="/assets/section1.png" alt="image">
    </div>
</div>
  `,
  styles: [
    `

    `
  ]
})
export class Section1 {

}
