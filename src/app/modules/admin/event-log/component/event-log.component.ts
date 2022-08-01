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
  respoonse: Boolean;
  newWindow: any;


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

  exportToPDF() {
    this.eventLogServices.getExportEventLogToPDF().subscribe(x => {
      const blob = new Blob([x], {type: 'application/pdf'});
      const data =  window.URL.createObjectURL(blob);
      const link = document.createElement('a')
      link.href = data;
      link.download = 'dziennikZdarzen.pdf';
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window})); 
    });
  }

}
