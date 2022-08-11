import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  product = new Product //Product 
  constructor(private requetter:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    
    this.getCurent(this.route.snapshot.params['id'])
  }

  getCurent(id:number){
    this.requetter.getOneProduct(id).subscribe(res=>{
      const reponce:any = res
      this.product.name = reponce[0].name
      this.product.description = reponce[0].description
      this.product.qty = reponce[0].qty
      this.product.price = reponce[0].price
      this.product.id = reponce[0].id
      console.log(this.product);
      
    })
  }
  update(){
    this.requetter.update(this.product,this.product.id).subscribe(res=>{
      console.log(res);
      
    })
  }
}
