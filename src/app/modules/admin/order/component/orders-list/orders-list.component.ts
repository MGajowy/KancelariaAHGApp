import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrdersListDTO } from '../../../../../generated/REST'
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  visible: boolean = false;
  date: Date | undefined;
  orderid: number;

  info: string = 'Lista zleceń jest pusta - wyszukaj ponownie';
  term: FormControl;
  orders: OrdersListDTO;
  cols: any[];

  pageSize: number = 5;
  pageNumber: number = 0;
  totalRecord: number = 0;

  constructor(
    private orderService: OrderService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {

    this.searchOrders();

    this.cols = [
      { field: 'surname', header: 'Nazwisko' },
      { field: 'name', header: 'Imię' },
      { field: 'email', header: 'Email' },
      { field: 'phoneNumber', header: 'Telefon' },
      { field: 'dateOfAdmission', header: 'Data przyjęcia' },
      { field: 'endDate', header: 'Data zakończenia' },
      { field: 'caseType', header: 'Typ sprawy' },
      { field: 'numberOfInstallments', header: 'Raty' },
      { field: 'sum', header: 'Kwota' },
      { field: 'menu', header: 'Akcje' }
    ];

  }
  searchOrders(): void {
    this.term = new FormControl('');
    this.reloadData();
    this.term.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()).subscribe(() => {
        this.reloadData();
      })
  }
  reloadData() {
    this.orderService.getOrderList(this.term.value, this.pageNumber, this.pageSize).subscribe(response => {
      this.orders = response;
      this.totalRecord = response.totalRecord;
    })
  }

  paginate(event) {
    this.pageNumber = event.page;
    this.pageSize = event.rows;
    this.reloadData();
  }

  closeOrder() {

    let orderToClose = {
      id: this.orderid,
      dateToClose: this.date
    }

    this.orderService.closeOrder(orderToClose).subscribe(response => {
      if (response === 200) {
        this.showSuccessMessage();
        this.orderid = null;
        this.date = null;
        this.visible = false;
        this.reloadData();
      } else {
        this.showErrorMessage();
      }
    })
  }

  modifyOrder(id: number) {
    //todo zaimplementować komponent modyfikacji
    this.router.navigate(['/office/mofidy-order', id]);
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe(result => {
      if (result === 200) {
        this.showSuccessDeleteMessage(id);
        this.reloadData();
      } else {
        this.showErrorDeleteMessage(id);
      }
    })

  }

  getDialog(id: number) {
    this.visible = true;
    this.orderid = id;
  }





  showSuccessMessage() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Zlecenie zostało zakończone' });
  }

  showErrorMessage() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Błąd podczas dodania daty zakończenia zlecenia.', detail: 'Skontaktuj się z administratorem' });
  }

  showSuccessDeleteMessage(id: number) {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Zlecenie o id ' + id + ' zostało usunięte ' });
  }

  showErrorDeleteMessage(id: number) {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Zlecenie o id ' + id + ' nie zostało usunięte ' });
  }

}
