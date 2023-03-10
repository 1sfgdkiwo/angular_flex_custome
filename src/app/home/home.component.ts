import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { APIService } from '../api.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tampilMenuBar: boolean=false;
  // tittle: any=[];
  Data: any;
  // hasil: any;
  path_foto:any;
  path_foto_kosong: string='';


  constructor( private http: HttpClient, private DataService:APIService,private route:Router  ) { }

  ngOnInit(): void {
    this.path_foto=this.DataService.baseUrl+'/upload/'
this.path_foto_kosong='assets/fotokosong.jpg'
    this.load_post()
  }

   menuDrop(event:any) {
 (<HTMLInputElement>document.getElementById("myDropdown")).classList.toggle("show");
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  menuDropM(event:any) {
    (<HTMLInputElement>document.getElementById("myDropdownM")).classList.toggle("show");
       if (!event.target.matches('.dropbtnM')) {
         var dropdowns = document.getElementsByClassName("dropdown-contentM");
         var i;
         for (i = 0; i < dropdowns.length; i++) {
           var openDropdown = dropdowns[i];
           if (openDropdown.classList.contains('show')) {
             openDropdown.classList.remove('show');
           }
         }
       }
     }
  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // } 

  goToHalamanAPI(){
    this.route.navigate(['halaman-api'])
  }

  load_post() {
    this.http.get(this.DataService.baseUrl + '/api/materi/materi_all.php').subscribe((result: any) => {
      // 
      // this.hasil=result
      //   for (let i=0; i< this.hasil.length; i++){
      //   //   this.tittle=this.Data[i].title;
      //   if(this.hasil[i].title !=null){
          
      //   }else{
          this.Data=result
        // }
          console.log(this.Data)
        // }


     
    })
  }

  bukaNav(){
    this.tampilMenuBar=! this.tampilMenuBar
  }

}
