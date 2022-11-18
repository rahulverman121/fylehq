import { Component, OnChanges, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnChanges {
  @Input() name:string ='defunkt';
  user:any;
  state:any;
  constructor(private http : HttpClient){

  } 
  ngOnChanges(): void {
    this.state="loading";
    this.http.get('https://api.github.com/users/'+this.name)
    .subscribe(Response => {
      console.log(Response)
      this.user=Response;
      this.state="loaded";
    });
    
  }

}
