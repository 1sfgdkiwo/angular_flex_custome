import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-halaman-api',
  templateUrl: './halaman-api.component.html',
  styleUrls: ['./halaman-api.component.scss']
})
export class HalamanAPIComponent implements OnInit {
  ISIapi: any;
  selectedValue: string='';

  constructor(private http:HttpClient, private dataservice:APIService) { }

  ngOnInit(): void {
    this.LoadApi()
    // this.dataservice.loadAPI()
  }


LoadApi(){


    this.http.get(this.dataservice.APIURL+'/api/toko/toko_all.php').subscribe((result: any) => {
        this.ISIapi=result;
        console.log(result)
    })

}
  

}
