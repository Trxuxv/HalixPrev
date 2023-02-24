import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onInformation(){
    var dataInformation = localStorage.getItem("@DATA_INFORMATION");

    if (dataInformation == null){
      // alert('NO INFORMATION DATA YET');
      this.router.navigate(['/information']);
    }else{
      this.router.navigate(['information']);
    }
  }

  onAnotation(){
    this.router.navigate(['/information/anotation']);
  }

}
