import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anotation } from '../models/anotation.model';
import * as data from './../data/data';

@Component({
  selector: 'app-read-anotation',
  templateUrl: './read-anotation.component.html',
  styleUrls: ['./read-anotation.component.css']
})
export class ReadAnotationComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

    anotations = data.anotation;
    anotation: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.anotation = this.anotations.find(x => x.id === params['id'])
    });
  }


}
