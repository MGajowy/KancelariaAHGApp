import { EventLogService } from './../service/event-log.service';
import { Component, OnInit } from '@angular/core';
import { EventLogListDTO } from 'src/app/generated/REST';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss']
})
export class EventLogComponent implements OnInit {

  term: FormControl;
  logList: EventLogListDTO;
  cols: any[];
  respoonse: Boolean;
  newWindow: any;
  date: Date;
  pageSize: number = 5;
  pageNumber: number = 0;
  totalRecords: number = 0;

  constructor(private eventLogServices: EventLogService) { }

  ngOnInit() {
    this.wyszukiwarkaRozporzadzen();

    this.cols = [
      // { field: 'id', header: 'ID' },
      { field: 'action', header: 'Nazwa czynności' },
      { field: 'userName', header: 'Użytkownik' },
      { field: 'dateAction', header: 'Data dodania logu'}
    ];
  }

  private wyszukiwarkaRozporzadzen() : void {
    this.term = new FormControl('');
    this.reloadData();
    this.term.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(() => {
        this.reloadData();
      })
  }

  reloadData() {
    this.eventLogServices.getEventLogListByNameAndPage(this.term.value, this.pageNumber, this.pageSize).subscribe(data => {
      this.logList = data;
      this.totalRecords = data.totalRecord;
    });
  }

  exportToPDF() {
    this.eventLogServices.getExportEventLogToPDF().subscribe(x => {
      const blob = new Blob([x], {type: 'application/pdf'});
      const data =  window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      this.date = new Date();
      link.href = data;
      link.download = 'DziennikZdarzen_' + this.date.toISOString() + '.pdf';
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window})); 
    });
  }

  paginate(event) {
    this.pageNumber = event.page;
    this.pageSize = event.rows;
    this.reloadData(); 
  }

}
