// Imports Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// Imports Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CarsComponent} from './pages/products/cars/cars.component';
import { CategoriesComponent } from './pages/products/categories/categories.component';
import { SearchComponent } from './pages/search/search.component';
import { CountriesComponent } from './pages/countries/countries.component';

const routes: Routes = [
    { path: 'home', component:  HomeComponent, data: {title: 'inicio', icon: 'fa-home'}},
    { path: 'about', component: AboutComponent, data: {title: 'Acerca de', icon: ''} },
    { path: 'countries', component: CountriesComponent, data: {title: 'Paises', icon: 'fa-home'}},
    { 
        path: 'products', 
        component: ProductsComponent,
        children: [
            {path: 'cars', component: CarsComponent, data: {title: 'Autos', icon: ''}},
            {path: 'categories/:category', component: CategoriesComponent, data: {title: 'Categorías', icon: ''}},
            {path: '', redirectTo: 'categories/Cars', pathMatch: 'full'},
            {path: '**', redirectTo: 'categories/Cars', pathMatch: 'full'}
        ] ,
        data: {title: 'Productos', icon: ''}
    },
    { path: 'product/:code/:category/:search', component: ProductComponent },
    { path: 'search/:criterio', component: SearchComponent },
    { path: '', redirectTo:'/home', pathMatch:'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // el snippet pone forChild (rutas protegidas por contraseña), hay que cambiarlo por forRoot (publicas)
    exports: [RouterModule]
})
export class AppRoutingModule {}
