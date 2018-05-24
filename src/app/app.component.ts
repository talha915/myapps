import { Component } from '@angular/core';
import { Myclass } from './myclass';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  myData: Myclass = {
    id: 1,
    name:'ABC'
  }
  records=[];
  constructor(private myservice: HeroService){}
  ngOnInit(){
    this.records = this.myservice.getData();
    console.log("Service message: ", this.records);
  }
}
