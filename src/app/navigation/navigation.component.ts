import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit, AfterViewInit {

  dropdownVisible: boolean = false;
  @ViewChild('dashboard') dashboard: ElementRef<HTMLAnchorElement>;
  @ViewChild('api') api: ElementRef<HTMLAnchorElement>;
  @ViewChild('users') users: ElementRef<HTMLAnchorElement>;

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setPage(this.route.url);
  }

  setPage(item: string): void {
    switch (item) {
      case '/main/dashboard':
        this.dashboard['_element'].nativeElement.classList.add('actual-page');
        this.api['_element'].nativeElement.classList.remove('actual-page');
        this.users['_element'].nativeElement.classList.remove('actual-page');
        break;
      case '/main/api-e-exemplos':
        this.api['_element'].nativeElement.classList.add('actual-page');
        this.dashboard['_element'].nativeElement.classList.remove('actual-page');
        this.users['_element'].nativeElement.classList.remove('actual-page');
        break;
      case '/main/listagem-de-usuarios':
        this.users['_element'].nativeElement.classList.add('actual-page');
        this.api['_element'].nativeElement.classList.remove('actual-page');
        this.dashboard['_element'].nativeElement.classList.remove('actual-page');
        break;
    }
  }

}
