import { Component, OnInit } from '@angular/core';
import { ResolutionService } from '../../service/resolution.service';
import { ResolutionListDTO, ResolutionDTO } from './../../../../generated/REST';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth/auth-service.service';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-resolutions-list',
  templateUrl: './resolutions-list.component.html',
  styleUrls: ['./resolutions-list.component.scss']
})
export class ResolutionsListComponent implements OnInit {

  resolutionList: ResolutionListDTO;
  resolution: ResolutionDTO;
  message: String = 'Lista uchwał jest pusta.'
  term: FormControl;
  adminRole: boolean = false;
  listRoles: any;
  msgs: Message[] = [];
  position: string;

  constructor (
    private resolutionService: ResolutionService,
    private router: Router,
    private authservice: AuthServiceService,
    private confirmationService: ConfirmationService,
    ) { }

  ngOnInit(): void {
      this.getRole();
      this.wyszukiwarkaUchwal();
  }

  getRole(): boolean {
    this.authservice.getRoles().subscribe(res => {
      this.listRoles = res;
      this.listRoles.forEach(element => {
        if (element == 'ADMIN') {
          this.adminRole = true;
        }
      });
    })
    return this.adminRole;
  }

  private wyszukiwarkaUchwal() : void {
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
    this.resolutionService.getResolutionOfDescription(this.term.value).subscribe(res => {
      this.resolutionList = res;
    })
  }

  modifyResolution(id: number) {
    this.router.navigate(['office/modify-resolutions', id]);
  }

  confirmPosition(position: string, id: number, nameResolution: string) {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Czy chcesz usunac uchwałę: ' + nameResolution + '?',
      header: 'Usuwanie uchwały',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.msgs = [{ severity: 'info', summary: 'OK.', detail: 'Uchwała ' + nameResolution + ' została usunięta.' }];
        this.deleteResolution(id);
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Anulowano usuwanie uchwały ' + nameResolution }];
      },
      key: "positionDialog"
    });
  }

  deleteResolution(id: number) {
    this.resolutionService.deleteResolution(id)
      .subscribe(data => {
        this.reloadData();
      },
        error => console.log(error));
  }

}
