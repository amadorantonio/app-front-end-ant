import { Component, OnInit } from '@angular/core';
import { Router, convertToParamMap, ActivatedRoute, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  breadcrumb: any = {};
  constructor(private router: Router) { 
    this._getBreadcrumb().subscribe(event =>{
      this.breadcrumb = event;
      //console.log(event)
    });
  }


  ngOnInit() {
  }

  search(criterio: string){
    // console.log('El criterio de busqueda es:', criterio)

    this.router.navigate(['/search', criterio]);
  }

  _getBreadcrumb(){
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      //filter((event: ActivationEnd) => event.snapshot.firstChild == null)
      map((event: ActivationEnd) => event.snapshot.data)
    )
  }

}
