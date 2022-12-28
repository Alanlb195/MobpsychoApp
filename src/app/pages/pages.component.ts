import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../auth/services/auth.service';
import { User } from '../auth/interfaces/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  mainOptions: any[] = [
    { name: 'Home', icon: 'home', router: '' },
    { name: 'Cart', icon: 'shopping_cart', router: 'cart' }
  ];
  currentUser: User;

  constructor(
    private observer: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
    private router: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('user')!);
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width:800px)']).subscribe((response) => {
      if (response.matches) {
        this.sidenav.mode = 'over'; // side to swipe the content!!
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
    });
    this.cdr.detectChanges();
  }

  public cerrarSesion(): void {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }


}
