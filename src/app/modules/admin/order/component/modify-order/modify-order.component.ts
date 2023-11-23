import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDTO } from 'src/app/generated/REST';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { MessageService } from 'primeng/api';

interface ChoiseType {
  value: string;
}

interface NumberOfInstallments {
  value: number;
}
@Component({
  selector: 'app-modify-order',
  templateUrl: './modify-order.component.html',
  styleUrls: ['./modify-order.component.scss']
})
export class ModifyOrderComponent implements OnInit {

  id: number;
  order: OrderDTO;
  type: ChoiseType[] = [
    { value: 'Porada' },
    { value: 'Sprawa rozwodowa' },
    { value: 'Sprawa spadkowa' },
    { value: 'Sprawa karna' },
    { value: 'Sprawa cywilna' },
    { value: 'Sprawa administracyjna' },
    { value: 'Inne' },
  ];
  numberOfInstallments: NumberOfInstallments[] = [
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 }
  ]

  constructor(
    private router: Router,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.order = new OrderDTO();

    this.id = this.route.snapshot.params['id'];
    this.orderService.detailsOrder(this.id).subscribe(response => {
      console.log(response);
      this.order.name = response.name;
      this.order.surname = response.surname;
      this.order.email = response.email;
      this.order.phoneNumber = response.phoneNumber;
      this.order.caseType = response.caseType;
      this.order.dateOfAdmission = response.dateOfAdmission;
      this.order.endDate = response.endDate;
      this.order.numberOfInstallments = response.numberOfInstallments;
      this.order.sum = response.sum;

    });
  }

  onSubmit() {
    this.updateOrder();
  }

  updateOrder() {
    this.orderService.updateOrder(this.id, this.order).subscribe(res => {
      if (res === 200) {
        this.showSuccessMessage();
        this.order = new OrderDTO();
        setTimeout(() => {
          this.router.navigate(['office/orders-list'])
        }, 1500);
      } else {
        this.showErrorMessage();
      }
    })
  }

  goToListOrders() {
    this.router.navigate(['/office/orders-list']);
  }

  showSuccessMessage() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Zmodyfikowano zlecenie.' });
  }

  showErrorMessage() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Błąd modyfikacji zlecenia.', detail: 'Skontaktuj się z administratorem' });
  }

  showValidationMessage() {
    this.messageService.add({ key: 'tc', severity: 'info', summary: 'Uzupełnij wymagane pola.' });
  }

}
