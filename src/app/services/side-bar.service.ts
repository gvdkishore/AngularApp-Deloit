import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  hideSideNav: boolean = false;
  constructor(private http: HttpClient) { }
  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }
  getJsonData () {
    return this.http.get("./assets/data.json");
  }
}
