import { EventLogService } from './../service/event-log.service';
import { Component, OnInit } from '@angular/core';
import { EventLogListDTO } from 'src/app/generated/REST';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss']
})
export class EventLogComponent implements OnInit {

  logList: EventLogListDTO;
  cols: any[];

  constructor(private eventLogServices: EventLogService) { }

  ngOnInit() {
    this.eventLogServices.getEventLogList().subscribe(data => {
      this.logList = data;
    });

    this.cols = [
      // { field: 'id', header: 'ID' },
      { field: 'czynnosc', header: 'Nazwa czynności' },
      { field: 'uzytkownik', header: 'Użytkownik' },
      { field: 'data_czynnosci', header: 'Data dodania logu'}
    ];
  }

}
