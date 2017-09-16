import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  selectedMenu: string;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this._router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.selectedMenu = this.getMenuUrl(event.url);
        }
      }
    );
  }
  
  getMenuUrl(url: string) {
    let splitUrl = url.split('/');
    let menuUrl = '';

    if(url.split('/').length > 1) {
      menuUrl = splitUrl[1];
    }

    return menuUrl;
  }

}
