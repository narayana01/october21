import { Component, OnInit } from '@angular/core';
import { TableserviceService } from '../tableservice.service';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators'; 

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.scss']
})
export class TableviewComponent implements OnInit {
  titlevalue: any;
  url: any;
  createdat: any;
  author: any;
    selectedRow : Number;
    setClickedRow : Function;
  myda: any;
  constructor(private ser:TableserviceService) {
    this.setClickedRow = function(index){
      this.selectedRow = index;
      this.updatedata();
  }
   }

data:object;
idvalue:any;
na:any;
emai:any;
subscription:any;
data1:any;
arr:any[]
  
  ngOnInit() {
   this.getemployee();
 
  }
getemployee(){
  this.subscription=timer(0,10000).pipe(
    switchMap(()=> this.ser.getdata())
    ).subscribe(resp=>{console.log(resp)
    this.data1=resp
    this.data1=this.data1.hits});
   ;

// this.ser.getdata().subscribe(res=>{ console.log("employee data",this.data=res);
// this.data1=res;
// this.data1=this.data1.hits;

// this.subscription=timer(0,10000).pipe(switchMap(()=>this.ser.getdata())).subscribe(res=>this.data=res)
  console.log("renjkn",this.data)

}






func(t){
  // this.titlevalue=t.title;
  // this.url=t.url;
  // this.createdat=t.created_at;
  // this.author=t.author;
  this.na=t
}
updatedata(){
  this.arr=this.na
  this.ser.updatedata(this.arr).subscribe(res=>this.myda)
  console.log(this.arr,"naraiajfkabfhab");
  
}
  
}