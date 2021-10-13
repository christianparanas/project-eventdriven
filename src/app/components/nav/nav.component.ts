import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isSearchBarOpen: boolean = false;
  isSideBarOpen: boolean = false;
  onScroll: boolean = false;
  searchinput: any;
  isAuth: boolean = false;

  @Input() currentRoute: String;
  @Input() searchquery: String;
  @Input() AddedToCart: number = 23;
  @Output() btnClickOnSearch = new EventEmitter();

  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.checkIfAuth()

    window.addEventListener('scroll', this.listenScrollEvent);
    this.searchinput = this.searchquery;
  }

  checkIfAuth() {
    if (this.authService.isLoggedIn()) {
      this.isAuth = true
    }
  }

  openCloseSearchBar() {
    this.isSearchBarOpen = !this.isSearchBarOpen;
  }

  openCloseSideBar() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }

  listenScrollEvent = () => {
    window.scrollY > 15 ? (this.onScroll = true) : (this.onScroll = false);
  };

  searchStoreOrProduct() {
    if (this.searchinput) {
      this.router.navigate(['/search'], {
        queryParams: { keyword: this.searchinput },
      });

      this.openCloseSearchBar();

      // emit the btn click to call a function to check If has result
      setTimeout(() => {
        this.btnClickOnSearch.emit();
      }, 100);
    }
  }
}
