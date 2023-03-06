import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  public baseUrl =  "http://localhost/php_db_satufokus";
  public APIURL = "https://satufokus.com/php_db_bsa_dp";
  // ISIapi: any;

  constructor(public http:HttpClient) { }



}
