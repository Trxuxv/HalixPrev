import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as data from './../data/data';

@Component({
  selector: 'app-list-anotation',
  templateUrl: './list-anotation.component.html',
  styleUrls: ['./list-anotation.component.css']
})
export class ListAnotationComponent implements OnInit {

  anotationList = data.anotation;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(data.anotation)
  }

  onRead(id: string){
    this.router.navigate(['information/anotation/read/' + id ]);
  }

  onEdit(id: string){
    this.router.navigate(['information/anotation/edit/' + id]);
  }

}
