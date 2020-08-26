import { Component, OnInit } from '@angular/core';
import { SideBarService } from '../services/side-bar.service'
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  hideSideNav: boolean = false;
  showDetailesPage: boolean = false;
  furnituresData: any;
  selectedFurniture: any;
  noResults: boolean = false;
  constructor(private service: SideBarService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
      this.service.getJsonData().subscribe(data => {
        this.furnituresData = data
      })
  }
  openCloseSideBar () {
    this.hideSideNav = !this.hideSideNav;
  }
  openList1 () {
    let list = document.getElementById("ollist");
    if (list.style.display == "none"){
      list.style.display = "block";
      }else{
      list.style.display = "none";
      }
  }
  openList2 () {
    let list1 = document.getElementById("ollist2");
    if (list1.style.display == "none"){
      list1.style.display = "block";
      }else{
      list1.style.display = "none";
      }
  }
  openList3 () {
    let list2 = document.getElementById("ollist3");
    if (list2.style.display == "none"){
      list2.style.display = "block";
      }else{
      list2.style.display = "none";
      }
  }
  showDetailedPage (furnitures) {
    this.spinner.show();
      
    setTimeout(() => {
      /** spinner ends after 3 seconds */
      this.spinner.hide();
    }, 2000);
     this.showDetailesPage = true
     this.selectedFurniture = furnitures
  }
  showMainPage () {
    this.showDetailesPage = false
    this.noResults = false
  }
  showNoData() {
    this.noResults = true
  }
}
