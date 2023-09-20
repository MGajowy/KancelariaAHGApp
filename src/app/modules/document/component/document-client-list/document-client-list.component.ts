import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DocumentService } from '../../service/document.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DocumentListDTO } from 'src/app/generated/REST';

@Component({
  selector: 'app-document-client-list',
  templateUrl: './document-client-list.component.html',
  styleUrls: ['./document-client-list.component.css']
})
export class DocumentClientListComponent implements OnInit {
  [x: string]: any;
  term: FormControl;
  documents: DocumentListDTO;
  cols: any[];

  pageSize: number = 5;
  pageNumber: number = 0;
  totalRecord: number = 0;
  // date: Date;


  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.searchDocuments();

    this.cols = [
      { field: 'docName', header: 'Nazwa pliku' },
      { field: 'docType', header: 'Typ pliku' },
      { field: 'createDate', header: 'Data utworzenia' },
      { field: 'id', header: 'Akcja' }
    ];
  }
  private searchDocuments(): void {
    this.term = new FormControl('');
    this.reloadData();
    this.term.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()).subscribe(() => {
        this.reloadData();
      })
  }

  reloadData() {
    this.documentService.getDocumentList(this.term.value, this.pageNumber, this.pageSize).subscribe(response => {
      this.documents = response;
      this.totalRecord = response.totalRecords;

    })
  }

  paginate(event) {
    this.pageNumber = event.page;
    this.pageSize = event.rows;
    this.reloadData();
  }

  downloadFile(id: number): void {
    this.documentService.downloadDocument(id).subscribe(res => {
      const documentName = res.headers.get('content-disposition').split(';')[1].split('=')[1].split('"')[1].trim();
      const blob: Blob = res.body as Blob;
      const link = document.createElement('a');
      link.download = documentName;
      link.href = window.URL.createObjectURL(blob);
      link.click();
    })
  }
}
