import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any
  product = new Product
  constructor(private pProductService:ProductService) { }
  
  ngOnInit(): void {
    this.getProductData()
  }
  getProductData(){
    console.log(this.pProductService.getData().subscribe(res=>{
      console.log(res);
      this.products = res
    }));
  }
  deleteOne(id:number){
    this.pProductService.deleteOne(id).subscribe(res=>{
      console.log(res);
      
    })
  }
  message(id:number){
    var x
    this.pProductService.getOneProduct(id).subscribe(res=>{
      // console.log(res);
       x = res
    })
    
    // alert('vous avez cliquer sur le produit'+id)
    // prompt("enter les nouvelle information")
    console.log("vous voulez editer");
    
  }
  delete(id:number){
    alert("you want to delete")
    this.pProductService.deleteOne(id).subscribe(res=>{
      console.log(res);
      this.getProductData()
    })

  }
  create(){
    // console.log(this.product);
    console.log("crestion d'un nouveaux produit");
    this.pProductService.create(this.product).subscribe(res=>{
      console.log(res);
      this.getProductData()
    })
    
  }
}
