import { Component, OnInit, HostListener } from '@angular/core';
import { EventGeneratorService } from 'app/services/event-generator.service';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productGuide=[
    {
      title:'Customer Service',
      desc:'Coustomer Support team is active at business hours for coustomer’s Service'
    },
    {
      title:'Gallery',
      desc:'Essential parts of every board made by top manufacturer'
    },
    {
      title:'Events',
       desc:'Top quality replacement wheels for your unique boards'
      
    },
    {
      title:'Gurrante Information',
      desc:'Snif’z World Provide gurrante with all related products. For Coustmer Setisfication…' 
    },
    {
      title:'Display Center',
      desc:'Find the exclusive snifz’s world kitchen appliances in our catalog'
    },
    {
      title:'Contant Us',
      desc:'For any query please contact us , Snif’zworld team 24/7 Available'
    }
  ];
kitchenAppliances = [
  {
    img:'http://www.snifzworld.com/snifzworld_data/uploads/2017/07/1-HOOD.jpg',
    title:'RANGE HOOD'
    },{
      img:'http://www.snifzworld.com/snifzworld_data/uploads/2017/07/2-hOB.jpg',
      title:'BUILT-IN HOB'
      }
    ,{
      img:'http://www.snifzworld.com/snifzworld_data/uploads/2017/07/3-b-oven.jpg',
      title:'BUILT-IN OVEN'
      },
      {
        img:'http://www.snifzworld.com/snifzworld_data/uploads/2017/07/4-M-OVEN.jpg',
        title:'BUILT-IN MICROWAVE'
        },
        {
          img:'http://www.snifzworld.com/snifzworld_data/uploads/2017/07/5-SINK.jpg',
          title:'KITCHEN SINKS'
          },
          {
            img:'http://www.snifzworld.com/snifzworld_data/uploads/2017/07/6-faucet.jpg',
            title:'KITCHEN FAUCET'
            },
            {
              img:'http://www.snifzworld.com/snifzworld_data/uploads/2017/07/7-fridge.jpg',
              title:'BUILT-IN FRIDGE'
              },
              {
                img:'http://www.snifzworld.com/snifzworld_data/uploads/2017/07/8-washer.jpg',
                title:'BUILT-IN DISHWASHER'
                },
                {
                  img:'http://www.snifzworld.com/snifzworld_data/uploads/2017/07/9-cofee.jpg',
                  title:'BUILT-IN COFFE MAKER'
                  }
            ];
  constructor(private eventGenerator: EventGeneratorService) { }
  // @HostListener('window:scroll', ['$event']) 
  // onWindowScroll() {
  //   console.log(event);
  //   // console.debug("Scroll Event", document.body.scrollTop);
  //   // see András Szepesházi's comment below
  //   console.log("Scroll Event", window.pageYOffset );
  // }
  ngOnInit() {
    
    // this.eventGenerator.$disableScrollObservable.subscribe((res)=>{
    //   console.log(res);
    //   console.log(document.getElementById('main'));
    //   if(res==true){
    //   document.getElementById('main').style.overflowY = 'hidden';
    //   }
    //   else{
    //     document.getElementById('main').style.overflowY = 'auto';
    //   }
    // });
  
  }

};
