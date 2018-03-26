import { Component, ViewEncapsulation, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  template: require('./header.component.html'),
  styles: [require('./header.component.scss')],
})

export class HeaderComponent { 

	@HostListener('window:scroll', [])
  	onWindowScroll() {
    const scrollTopValue = document.documentElement.scrollTop;

    this.isFixed = (scrollTopValue>=300);
  }

  public isFixed: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {
    
  }
}
