import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { Iproduct } from '../../Models/iproduct';
import { ProductsWithApiService } from '../../Services/products-with-api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  currentProductID: number = 0;

  product: Iproduct | undefined = undefined;

  // Day5

  IDs: number[] = [];
  currentIndex: number = 0;


  // Day6

  searchResult:Iproduct[]=[];

  // ###################################
  // ActivedRoute
  constructor(
    private activatedroute: ActivatedRoute,
    private productservice: ProductsService,
    private router: Router,
    private productsAPIService: ProductsWithApiService
  ) {}
  ngOnInit(): void {
    // convert to number
    // parseInt,Number,+

    // this.currentProductID=(this.activatedroute.snapshot.paramMap.get('productID'))?Number(this.activatedroute.snapshot.paramMap.get('productID')):0;

    // this.currentProductID=Number(this.activatedroute.snapshot.paramMap.get('productID'))||0;

    // console.log(this.currentProductID);

    // this.product=this.productservice.getPrdByID(this.currentProductID);
    // let foundProduct=this.productservice.getPrdByID(this.currentProductID);
    // // console.log(this.product);
    // if(foundProduct){
    //   this.product=foundProduct;
    // }
    // else{
    //   alert("Product not found")
    //   // this.router.navigate(['**'])

    // }

    // Day5
    this.IDs = this.productservice.getPrdIDs();
    //  console.log(this.IDs);

    this.activatedroute.paramMap.subscribe((observer) => {
      this.currentProductID = Number(observer.get('productID')) || 0;
      // let foundProduct = this.productservice.getPrdByID(this.currentProductID);
      // // console.log(this.product);
      // if (foundProduct) {
      //   this.product = foundProduct;
      // } else {
      //   alert('Product not found');
      //   // this.router.navigate(['**'])
      // }

      // Day6

      this.productsAPIService.getPrdByID(this.currentProductID.toString()).subscribe(prd=>{

        this.product=prd;
        // console.log(prd);

      })


      // ###################
    });
  }

  prevFunc() {
    this.currentIndex = this.IDs.indexOf(this.currentProductID);
    // console.log(this.currentIndex);
    // console.log(this.IDs[this.currentIndex]);

    this.router.navigate(['/Prd', this.IDs[--this.currentIndex]]);
  }
  nextFunc() {
    this.currentIndex = this.IDs.indexOf(this.currentProductID);
    this.router.navigate(['/Prd', this.IDs[++this.currentIndex]]);
  }


  // Day6

  searchMat(mat:string) {
    this.productsAPIService.searchWithProductMaterial(mat).subscribe({
      next:(data)=>{
        // console.log(data);

        this.searchResult=data;

      },
      error:(err)=>{
        console.log(err);

      }
    })
  }
}
