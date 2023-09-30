import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../service/document.service';
import { MessageService } from 'primeng/api';
import { UserDocumentDTO } from 'src/app/generated/REST';
import { UserService } from 'src/app/modules/admin/user/services/user.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}


interface User {
  name: string,
  surname: string,
  id: number
}


@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.css']
})
export class UpdateDocumentComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  userId: number;
  selectedFile = null;
  changeImage = false;

  userDTO: UserDocumentDTO[];
  selectedUsers: UserDocumentDTO[];

  loading = false;

  constructor(private documentSevice: DocumentService,
    private messageService: MessageService,
    private userService: UserService) { }

  ngOnInit() {
    this.getUserList()
  }

  getUserList() {
    this.userService.getAllUsers().subscribe(res => {
      this.userDTO = res.userDocument
    }
    )
  }

  upload() {
    this.currentFileUpload = this.selectedFiles.item(0)
    this.userId = this.selectedUsers[0].id;
    this.loading = true;
    this.documentSevice.uploadDocument(this.currentFileUpload, this.userId).subscribe(data => {
      if (data === 201) {
        this.showSuccessMessage();
        this.loading = false;
      } else {
        this.showErrorMessage();
        this.loading = false;
      }

    },
      error => console.log(error));
  }

  change($event) {
    this.changeImage = true;
  }

  changedImage(event) {
    this.selectedFile = event.target.files[0];
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  onUpload(event) {
    this.selectedFile = event.target.files;
  }

  showSuccessMessage() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Dodano dokumenty.' });
  }

  showErrorMessage() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Błąd dodania dokumenty.', detail: 'Skontaktuj się z administratorem' });
  }

  showValidationMessage() {
    this.messageService.add({ key: 'tc', severity: 'info', summary: 'Coś poszło nie tak :( ).' });
  }

}
