import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




const urlCate = "http://localhost:3000/category " 
 const url = "http://localhost:3000/signupForm"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(urlCate);
  }
  getCate(): Observable<any> {
    return this.http.get<any>(`${urlCate}`)
  }
  filter_pro(id: any): Observable<any> {
    return this.http.get<any>(`${url}/?cate_id=${id}`)
  }
  detail(id: number): Observable<any> {
    return this.http.get<any>(`${url}/${id}`)
  }
}
