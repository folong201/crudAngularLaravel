import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  path:string = "http://127.0.0.1:8000/api"
  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get(`${this.path}/products`)
  }
  getOneProduct(id:number){
    return this.httpClient.get(`${this.path}/product/${id}`)
  }
  deleteOne(id:number){
    return this.httpClient.delete(`${this.path}/delete/${id}`)
  }
  create(data:any){
    
    return this.httpClient.post(`${this.path}/create`,data)
  }
  update(data:any,id:number){
    return this.httpClient.put(`${this.path}/update/${id}`,data)
  }
}
