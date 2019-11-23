import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  misdatos: ProductModel[] = [];
  category: string = '';
  criterio: string = '';
  constructor(private router: ActivatedRoute, private productsService: ProductsService, private route2: Router) {
     this.router.params.subscribe(params => {
      this.criterio = params['criterio'];
        //console.log('Estoy en SEARCH, El criterio de busqueda es:', criterio);
        //this.category = params['category'];
        this.productsService.getByDescription(this.criterio).subscribe((data: ProductModel[]) => {
        this.misdatos = data;
        //console.log('Data', data);
           })
     })
   }

  ngOnInit() {
  }
  metodoSearch(event: number){
    console.log(event);
    this.route2.navigate(['/about']);
  }
}
