import { Component, OnInit } from '@angular/core';
import { Data } from '../Data/list';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  Data: Array <any> = Data;
  constructor(private myservice1: HeroService) { }

  ngOnInit() {
    this.myservice1.getDetails()
    .subscribe(function(res){
      console.log("Response from Api: ", res);
    })
  }

}
