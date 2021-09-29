import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isSearchBarOpen: boolean = false
  isSideBarOpen: boolean = false
  onScroll: boolean = false
  @Input() currentRoute : String;
  //notification event pop-out
  @Input() AddedToCart:number=23;

  constructor() {

  }

  ngOnInit(): void {
    window.addEventListener("scroll", this.listenScrollEvent)
  }

  openCloseSearchBar() {
    this.isSearchBarOpen =! this.isSearchBarOpen;
  }

  openCloseSideBar() {
    this.isSideBarOpen =! this.isSideBarOpen;
  }

  listenScrollEvent = () => {
    window.scrollY > 15 ? this.onScroll = true : this.onScroll = false;
  }
}
