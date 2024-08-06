import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

currentProductID:number = 0;

product:Iproduct|undefined=undefined;
  // ActivedRoute
  constructor(private activatedroute: ActivatedRoute,private productservice:ProductsService,private router:Router){}
  ngOnInit(): void {


    // convert to number
    // parseInt,Number,+

    // this.currentProductID=(this.activatedroute.snapshot.paramMap.get('productID'))?Number(this.activatedroute.snapshot.paramMap.get('productID')):0;

    this.currentProductID=Number(this.activatedroute.snapshot.paramMap.get('productID'))||0;

    // console.log(this.currentProductID);



    // this.product=this.productservice.getPrdByID(this.currentProductID);
    let foundProduct=this.productservice.getPrdByID(this.currentProductID);
    // console.log(this.product);
    if(foundProduct){
      this.product=foundProduct;
    }
    else{
      alert("Product not found")
      // this.router.navigate(['**'])


    }



  }
}
