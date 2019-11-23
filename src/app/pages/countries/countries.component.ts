import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: []
})
export class CountriesComponent implements OnInit {

  misDatos: any = [];
  constructor(private router: ActivatedRoute, private productSvc: ProductsService, private route2: Router) { 
    this.productSvc.getContries().subscribe((data: any[]) => {
      this.misDatos = data;
      console.log(data);
    })
  }

  ngOnInit() {
  }

}
