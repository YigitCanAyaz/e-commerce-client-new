import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ECommerceClient';
  constructor() {}
}

$.get('https://localhost:7208/api/products', (data) => {
  console.log(data);
});

// $(document).ready(() => {
//   alert('asd');
// });
