import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styles: []
})
export class CarsComponent implements OnInit {

  misdatos: ProductModel[] = [];

  // cadena: string = "cadena";
  // numero: number = 98;
  // status: boolean = false;
  // objeto: any = ();
  // array: any[] = [];
  // fecha: Date = new Date;


  constructor(private productsSvc: ProductsService) {
    // this.productsSvc.getAll().subscribe((data: ProductModel[]) => {
      this.productsSvc.getByCategory('Cars').subscribe((data: ProductModel[]) => {
      this.misdatos = data;
      console.log('Data ', data);
    })

    //this.productsSvc.getCategory('Ships');
  }

  ngOnInit() {
  }

}
