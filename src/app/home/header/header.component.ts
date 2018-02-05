import { Component, OnInit } from '@angular/core';
import { EventGeneratorService } from 'app/services/event-generator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sideBar:boolean = false;
  constructor(private eventGenerator:EventGeneratorService) { }

  ngOnInit() {
  }
  showSideNav(){
this.sideBar = true;
this.eventGenerator.generateScrollEvent(true);
  }
  hideSideNav(){
    this.sideBar = false;
    this.eventGenerator.generateScrollEvent(false);
  }
}
