import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  product:any
  // product = {}
  constructor(private requeter:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.initProduct(this.route.snapshot.params['id'])   
  }

  initProduct(id:number){
    this.requeter.getOneProduct(id).subscribe(res=>{
      const rep:any = res
      console.log(rep);
      this.product.name = rep[0].name
      this.product.description = rep[0].description
      this.product.price = rep[0].price
      this.product.qty = rep[0].qty
      this.product.id = rep[0].id
      console.log(this.product.name);
      
    })
  }
}
