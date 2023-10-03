import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserDocumentDTO } from 'src/app/generated/REST';
import { UserService } from 'src/app/modules/admin/user/services/user.service';
import { baseUrl } from 'src/environments/environment';

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

  hiddenUpload: boolean = false;
  selectedFiles: FileList;
  userId: number;
  userDTO: UserDocumentDTO[];
  selectedUsers: UserDocumentDTO[];

  uploadedFiles: any[] = [];
  url: string;

  fileSize: number = 1000000;

  constructor(
    private messageService: MessageService,
    private userService: UserService) {
  }

  ngOnInit() {
    this.getUserList()
  }

  getUserList() {
    this.userService.getAllUsers().subscribe(res => {
      this.userDTO = res.userDocument
    }
    )
  }

  onError(event) {
      this.showErrorMessage();
  }

  getUser() {
    this.userId = this.selectedUsers[0].id;
    this.url = `${baseUrl}rest/document/secured/upload?userId=` + this.userId;
    this.hiddenUpload = true;
  }

  onUpload(event) {

    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.showSuccessMessage();
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
