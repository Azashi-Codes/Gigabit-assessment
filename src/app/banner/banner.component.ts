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


<div class="mt-[0rem] lg:mt-[10rem] xl:mt-[32rem]">
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
</div>


<div class="mt-[12rem]">
<div class="lg:grid grid-cols-2 gap-4 mt-40">
    <div class="flex lg:block justify-center">
      <img src="/assets/section2.png" alt="image">
    </div>

    <div class="mt-10">
      <p class="text-4xl font-semibold leading-[4rem]">Light, Fast & Powerful</p>

      <p class="mt-8">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
      <p class="mt-3">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
    </div>
</div>
</div>


<div class="mt-[15rem]">
<div class="lg:grid grid-cols-2 gap-4 mt-40">
    <div class="flex lg:block justify-center">
      <img src="/assets/section3.png" alt="image">
    </div>

    <div class="mt-10">
      <p class="text-4xl font-semibold leading-[4rem]">Light, Fast & Powerful</p>

      <p class="mt-8">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
      <p class="mt-3">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
    </div>
</div>
</div>


<div class="mt-[15rem]">
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
</div>
  `,
  styles: [
    `

    `
  ]
})
export class Banner {

}
