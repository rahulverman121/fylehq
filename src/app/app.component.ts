import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userr = 'defunkt';
  pageno:number=1;
  getuser(user:any) {
    this.userr=user.target.value;
  }
  prev() {
    if (this.pageno>1)
    this.pageno=this.pageno-1;
  }
  next() {
    this.pageno=this.pageno+1;
  }
}
