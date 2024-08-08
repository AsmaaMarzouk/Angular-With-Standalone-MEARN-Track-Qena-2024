import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalcDiscountPipe } from '../../Pipes/calc-discount.pipe';
import { ImgStyleDirective } from '../../Directives/img-style.directive';
import { ProductsService } from '../../Services/products.service';
import { Router, RouterModule } from '@angular/router';
import { ProductsWithApiService } from '../../Services/products-with-api.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    CalcDiscountPipe,
    ImgStyleDirective,
    RouterModule,
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  // productsList: Iproduct[];

  username: string = 'mohamed';

  productsAfterFilter: Iproduct[] = [];
  // set //get

  // Day3
  @Input() set filterByNameInchild(value: string) {
    // console.log(value);
    // console.log(this.performFilter(value));

    //  this.productsAfterFilter= this.performFilter(value)
    //  console.log(this.productsAfterFilter);

    // Day4
    // this.productsAfterFilter = this.Productservice.performFilter(value);

    // Day6

    this.productswitApi.getAllproducts().subscribe({
      next: (data) => {
        this.productsAfterFilter=data.filter(product =>product.name.toLowerCase().includes(value))
      },
      error: (err) => {
        console.log(err);

      },
    });

    // #################################
  }

  @Output() newprdEventAtCart = new EventEmitter<Iproduct>();

  date1: Date = new Date();
  // ##########################
  // caetgoryID// 1-tables   2-chairs  3-tv unit

  // Day4 => inject service
  constructor(
    private Productservice: ProductsService,
    private router: Router,
    private productswitApi: ProductsWithApiService
  ) {
    // this.productsList = [
    //   {
    //     id: 1,
    //     name: 'Odense 8-Seater Top Dining Table',
    //     price: 21500,
    //     quantity: 0,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Engineered Wood',
    //   },
    //   {
    //     id: 5,
    //     name: 'Trixia 4-Seater Glass Top Dining Table',
    //     price: 30000,
    //     quantity: 8,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Metal',
    //   },
    //   {
    //     id: 25,
    //     name: 'Gasha Marble Top Side Table',
    //     price: 14000,
    //     quantity: 10,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Metal',
    //   },
    //   {
    //     id: 7,
    //     name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     quantity: 2,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 17,
    //     name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     quantity: 2,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 9,
    //     name: 'Boston Study Chair',
    //     price: 1000,
    //     quantity: 10,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 10,
    //     name: 'Coby Extendable TV Unit',
    //     price: 13000,
    //     quantity: 0,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'Wood',
    //   },
    //   {
    //     id: 15,
    //     name: 'Accent TV Unit',
    //     price: 36999,
    //     quantity: 4,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'MDF',
    //   },
    //   {
    //     id: 55,
    //     name: 'Plymouth TV Unit',
    //     price: 36999,
    //     quantity: 3,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'wood',
    //   },
    // ];
    // this.productsAfterFilter=this.productsList;
  }
  ngOnInit(): void {
    // this.productsAfterFilter=this.productsList;

    // Day4
    // this.productsAfterFilter = this.Productservice.getAllProducts();

    // Day6

    // lazy => subscribe
    this.productswitApi.getAllproducts().subscribe({
      next: (prds) => {
        this.productsAfterFilter = prds;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  // performFilter(filterValue: string): Iproduct[] {
  //   filterValue = filterValue.toLowerCase();
  //   return this.productsList.filter((prd: Iproduct) =>
  //     prd.name.toLowerCase().includes(filterValue)
  //   );
  // }
  showImg: boolean = true;
  toggleImage() {
    this.showImg = !this.showImg;

    // console.log(this.showImg);
  }

  // perform filter

  // Day3
  addToCart(prd: Iproduct) {
    this.newprdEventAtCart.emit(prd);
  }

  goPrdDetails(prdid: number) {
    this.router.navigate(['/Prd', prdid]);
  }
}
