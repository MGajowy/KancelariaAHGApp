import { Component, OnInit } from '@angular/core';
import { AboutServiceService } from '../service/about-service.service';
import { OnlineHelpRequestDto } from 'src/app/generated/REST';
import { MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
@Component({
  selector: 'app-online-help',
  templateUrl: './online-help.component.html',
  styleUrls: ['./online-help.component.scss']
})
export class OnlineHelpComponent implements OnInit {

  notification: OnlineHelpRequestDto = new OnlineHelpRequestDto;
  submitted = false;


  constructor(
    private aboutService: AboutServiceService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
    ) { }

  ngOnInit() {
    this.submitted;
    this.primengConfig.ripple = true;  
  }

  onSubmit() {
    this.send();
  }

  send() {
    this.aboutService.sendEmail(this.notification).subscribe(res => {
      if (res === 202) {
        this.showSuccessMessage();
      } else {
        this.showErrorMessage();
      }
      this.submitted = true;
      this.newNotification();
  });
}

  newNotification(): void {
    this.submitted = false;
    this.notification = new OnlineHelpRequestDto;
  }

  showSuccessMessage() {
    this.messageService.add({severity:'success', summary:'Wysłano wiadomość.', detail:'Wiadomość została wysłana do adresata. Potwierdzenie wysłaliśmy na Twój email'});
  }

  showErrorMessage() {
    this.messageService.add({severity:'error', summary:'Błąd wysyłki.', detail:'Nie udało się wysłać wiadomości, sprawdź email i spróbuj jeszcze raz.'});
  }
}
