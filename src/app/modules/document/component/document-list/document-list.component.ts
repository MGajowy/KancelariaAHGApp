import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../service/document.service';
import { FormControl } from '@angular/forms';
import { DocumentListDTO, UserDocumentDTO } from 'src/app/generated/REST';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UserService } from 'src/app/modules/admin/user/services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  userDTO: UserDocumentDTO[];
  selectedUsers: UserDocumentDTO[];
  term: FormControl;
  cols: any[];
  documents: DocumentListDTO;
  pageSize: number = 5;
  pageNumber: number = 0;
  totalRecord: number = 0;
  userId: number;
  status: string;
  docName: string;

  constructor(
    private documentService: DocumentService,
    private messageService: MessageService,
    private userService: UserService) { }

  ngOnInit() {
    this.getUserList();
    this.cols = [
      { field: 'docName', header: 'Nazwa pliku' },
      { field: 'docType', header: 'Typ pliku' },
      { field: 'createDate', header: 'Data utworzenia' },
      { field: 'id', header: 'Akcje' }
    ];
  }

  searchDocuments(): void {
    this.userId = this.selectedUsers[0].id;
    this.term = new FormControl('');
    this.status = 'PUBLIC'
    this.reloadData();
    this.term.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()).subscribe(() => {
      this.reloadData();
      })
  }

  getUserList() {
    this.userService.getAllUsers().subscribe(res => {
      this.userDTO = res.userDocument;
    }
    )
  }

  reloadData() {
    this.documentService.getDocumentListForUser(this.userId, this.pageNumber, this.pageSize, this.term.value, this.status).subscribe(response => {
      this.documents = response;
      if (this.documents.documentList.length == 0)
        this.showInfoEmptyListMessage();
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
      const documentName = res.headers.get('content-disposition')?.split(';')[1].split('=')[1].trim();
      const blob: Blob = res.body as Blob;
      const link = document.createElement('a');
      link.download = documentName;
      link.href = window.URL.createObjectURL(blob);
      link.click();
    })
  }

  deleteDocument(id: number) {
    this.documentService.deleteDocument(id).subscribe(data => {
      if (data === 200) {
        this.showSuccessMessage();
        this.reloadData();
      } else {
        this.showErrorMessage();
      }
    })
  }

  showSuccessMessage() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Dokument został usunięty' });
  }

  showErrorMessage() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Wystąpił błąd', detail: 'Dokument nie został usunięty' });
  }

  showInfoEmptyListMessage() {
    this.messageService.add({ key: 'tc', severity: 'info', summary: 'Brak wyników :( ', detail: 'Lista dokumentów jest pusta' });
  }

}
