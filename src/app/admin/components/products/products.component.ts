import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private httpClientService: HttpClientService
  ) {
    super(spinner);
  }

  @ViewChild(ListComponent) listComponents: ListComponent;

  createdProduct(createdProduct: Create_Product) {
    this.listComponents.getProducts();
  }

  ngOnInit(): void {
    // this.showSpinner(SpinnerType.BallSpinClockwiseFadeRotating);

    console.log(5);

    // this.httpClientService
    //   .get<C[]>({
    //     // fullEndpoint: "https/sdhsdksdk"
    //     controller: 'products',
    //   })
    //   .subscribe((data) => console.log(data));

    // this.httpClientService
    //   .post(
    //     {
    //       controller: 'products',
    //     },
    //     {
    //       name: 'Kalem',
    //       stock: 100,
    //       price: 15,
    //     }
    //   )
    //   .subscribe();

    // this.httpClientService
    //   .post(
    //     {
    //       controller: 'products',
    //     },
    //     {
    //       name: 'Kağıt',
    //       stock: 50,
    //       price: 2.5,
    //     }
    //   )
    //   .subscribe();

    // this.httpClientService
    //   .post(
    //     {
    //       controller: 'products',
    //     },
    //     {
    //       name: 'Silgi',
    //       stock: 100,
    //       price: 12,
    //     }
    //   )
    //   .subscribe();

    // this.httpClientService
    //   .put(
    //     {
    //       controller: 'products',
    //     },
    //     {
    //       id: '43c328fb-02a0-43d8-90df-42395442ce56',
    //       name: 'Renkli Kağıt',
    //       stock: 250,
    //       price: 5.5,
    //     }
    //   )
    //   .subscribe();

    // this.httpClientService
    //   .delete(
    //     {
    //       controller: 'products',
    //     },
    //     '37a49e2d-0f46-49a0-b738-fa190674879b'
    //   )
    //   .subscribe();

    // this.httpClientService
    //   .get({
    //     fullEndpoint: 'https://jsonplaceholder.typicode.com/posts',
    //   })
    //   .subscribe((data) => console.log(data));
  }
}
