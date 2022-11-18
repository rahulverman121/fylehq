import { Component, OnInit, OnChanges,Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-userrepo',
  templateUrl: './userrepo.component.html',
  styleUrls: ['./userrepo.component.css']
})
export class UserrepoComponent implements OnChanges {
  @Input() name:string='defunkt';
  @Input() pagen:number=1;
  start:number=0;
  end:number=this.start+5;
  repo:any;
  stater:any;

  setpage(inst:number) {
    this.start=(inst-1)*6;
    this.end=this.start+5;

  }
  constructor(private http : HttpClient){

  } 


  // name='defunkt'
  ngOnChanges(): void {
    this.stater = "loading";
    this.start=0;
    this.end=this.start+5;
    this.http.get('https://api.github.com/users/'+this.name+'/repos?page='+this.pagen+'&per_page=6')
    .subscribe(Response => {
      console.log(Response)
      this.repo=Response;
      this.stater="loaded";
    });
  }
}
