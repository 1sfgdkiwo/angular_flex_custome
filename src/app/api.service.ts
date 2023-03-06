import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  public baseUrl =  "http://localhost/php_db_satufokus";
  public APIURL = "http://localhost/php_db_bsa/api/barang_all.php";
  // ISIapi: any;

  constructor(public http:HttpClient) { }



}
