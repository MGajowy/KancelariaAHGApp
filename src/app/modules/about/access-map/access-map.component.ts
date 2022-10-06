import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

declare var google: any;
@Component({
  selector: 'app-access-map',
  templateUrl: './access-map.component.html',
  styleUrls: ['./access-map.component.scss'],
  providers:[MessageService]
})
export class AccessMapComponent implements OnInit {

  options: any;
  overlays: any[];
  
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.options = {
      center: { lat: 53.77961883848834, lng: 20.489950959694113 },
      zoom: 15
    };

    this.overlays = [
      new google.maps.Marker({position: {lat: 53.77961883848834, lng: 20.489950959694113}, title:"Kancelaria Adwokacka AHG"})
  ];

  }

}
