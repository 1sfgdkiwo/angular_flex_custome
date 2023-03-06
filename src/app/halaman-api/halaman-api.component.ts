import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { APIService } from '../api.service';

@Component({
  selector: 'app-halaman-api',
  templateUrl: './halaman-api.component.html',
  styleUrls: ['./halaman-api.component.scss']
})
export class HalamanAPIComponent implements OnInit {
  ISIapi: any;
  selectedValue: string='';

  constructor(private route:Router,  private http:HttpClient, private dataservice:APIService) { }

  ngOnInit(): void {
    this.LoadApi()
    // this.dataservice.loadAPI()
  }

  gotoMain() {
    this.route.navigate(['']);
  }

LoadApi(){


    this.http.get(this.dataservice.APIURL).subscribe((result: any) => {
        this.ISIapi=result;
        console.log(result)
    })

    // this.http.get(this.dataservice.baseUrl+'/api/customer/customer_all.php').subscribe((result:any)=>{

    // }) 

}
  

}
