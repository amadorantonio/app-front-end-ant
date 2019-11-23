import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/models';
import { Observable, observable } from 'rxjs';

const URL_PRODUCTS = 'https://angunar-products-amador.firebaseio.com/productos.json';
const URL_COUNTRIES = 'https://restcountries.eu/rest/v2/all';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(URL_PRODUCTS);
  }

  getByCategory(category: string){
    return new Observable(observer => {
      this.http.get(URL_PRODUCTS).subscribe((data: ProductModel[]) => {
        const filter = data.filter(item => item.categoria == category || item.categoria.indexOf(category) >= 0);
        observer.next(filter);
      });
    });
  }

  getByCode(code: string){
    return new Observable(observer => {
      this.http.get(URL_PRODUCTS).subscribe((data: ProductModel[]) => {
        const filter = data.filter(item => item.codigo == code);
        observer.next(filter[0]); //se devuelve el índice 0 para sólo enviar el primer elemento del arreglo
      })
    })
  }

  getByDescription(description: string){
    return new Observable(observer => {
      this.http.get(URL_PRODUCTS).subscribe((data: ProductModel[]) => {
        const filter = data.filter(item => item.descripcion.toLowerCase() == description.toLowerCase() || item.descripcion.toLowerCase().indexOf(description.toLowerCase()) >= 0);
        observer.next(filter);
      });
    });
  }

  getContries(){
    return this.http.get(URL_COUNTRIES);
  }
}
