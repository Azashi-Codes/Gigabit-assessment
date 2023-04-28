import { Component } from '@angular/core';

@Component({
  selector: 'requestform',
  template: `
  <div class="px-4 md:px-10 lg:px-20 xl:px-36 my-20">
  <p class="text-4xl font-semibold leading-[4rem]">Applicant Details</p>
  <div class="lg:grid grid-cols-2 gap-4">
    <div>
      <p class="mt-8 text-lg">First Name</p>
      <input type="text" class="border-2 border-gray h-12 rounded-lg w-[80%] mt-3"/>
    </div>
    <div>
    <p class="mt-8 text-lg">Last Name</p>
    <input type="text" class="border-2 border-gray h-12 rounded-lg w-[80%] mt-3"/>
    </div>

    <div>
      <p class="mt-8 text-lg">Other Names</p>
      <input type="text" class="border-2 border-gray h-12 rounded-lg w-[80%] mt-3"/>
    </div>
    <div>
    <p class="mt-8 text-lg">Date of Birth</p>
    <input type="date" class="border-2 border-gray h-12 rounded-lg w-[80%] mt-3"/>
    </div>

    <div>
      <p class="mt-8 text-lg">ID Type</p>
      <select name="cars" id="cars" class="border-2 border-gray h-12 rounded-lg w-[80%] mt-3">
    <option value="passport">Password</option>
    <option value="id">National ID</option>
  </select>
    </div>
    <div>
    <p class="mt-8 text-lg">ID Number</p>
    <input type="text" class="border-2 border-gray h-12 rounded-lg w-[80%] mt-3"/>
    </div>
</div>
</div>
  `,
  styles: [
    `

    `
  ]
})
export class Requestform {

}
