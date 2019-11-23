import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductModel } from 'src/app/models/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  product: ProductModel = {};
  category: string = '';
  search: string = '';
  link: string = '';
  param: string = '';
  textButton: string = '';
  constructor(private router: ActivatedRoute, private productSvc: ProductsService) { 
    this.router.params.subscribe(params => { 
      const code = params['code'];
      this.category = params['category'];
      this.search = params['search'];
      this.productSvc.getByCode(code).subscribe((data: ProductModel) => {
        this.product = data;
        this.GetLink();
      });
    })
    
  }

  ngOnInit() {
  }

  private GetLink(){
    if(this.search != ''){
      this.link = '/search';
      this.param = this.search;
      this.textButton = 'Regresar a Búsqueda';
    }
    else{
      this.link = '/products/categories';
      this.param = this.category;
      this.textButton = 'Regresar a Productos';
    }
  }

}
