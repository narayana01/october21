import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient }    from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TableserviceService {


  
  constructor(private ht: HttpClient) {  
   }
   getdata(){
 return this.ht.get("https://hn.algolia.com/api/v1/search_by_date?tags=story");
}
updatedata(req){
  return this.ht.post("http://localhost:3000/Employee",req);
}

}