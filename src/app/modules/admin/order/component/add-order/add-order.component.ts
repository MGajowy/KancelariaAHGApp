import { Component, OnInit } from '@angular/core';
import { OrderDTO } from 'src/app/generated/REST';
import { OrderService } from '../../services/order.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  order: OrderDTO = new OrderDTO;
  submitted = false;

  constructor(
    private orderService : OrderService,
    private messageService: MessageService,
    ) { }

  ngOnInit() {
  }

  newOrder(): void {
    this.submitted = false;
    this.order = new OrderDTO;
  }

  save() {
    this.orderService.createOrder(this.order)
      .subscribe(data => {
        if (data === 201) {
          this.showSuccessMessage();
        } else {
          this.showErrorMessage();
        }
        this.submitted = true;
      },
        error => console.log(error));
    this.order = new OrderDTO;
  }

  onSubmit() {
    if (this.order.surname == null || this.order.name == null ||
      this.order.email == null || this.order.caseType == null ||
      this.order.phoneNumber == null || this.order.sum == null || 
      this.order.numberOfInstallments == null)
      this.showValidationMessage();
      else 
    this.save();
  }

  showSuccessMessage() {
    this.messageService.add({key: 'tc', severity:'success', summary:'Przyjęto nowe zlecenie.'});
  }

  showErrorMessage() {
    this.messageService.add({key: 'tc', severity:'error', summary:'Błąd dodania zlecenia.', detail:'Skontaktuj się z administratorem'});
  }

  showValidationMessage() {
    this.messageService.add({ key: 'tc', severity: 'info', summary: 'Uzupełnij wymagane pola.' });
  }



}
