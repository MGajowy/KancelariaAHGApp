import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  //panelOpenState = false;
  items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadMenu();
  }

  loadMenu() {
    this.items = [
      {
        label: 'Uchwały',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Dodaj kategorie',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'dodaj kategorie',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'dodaj uchwałe',
                icon: 'pi pi-fw pi-video'
              }
            ]
          },
          {
            label: 'Kategorie uchwał',
            icon: 'pi pi-fw pi-trash',
            command: () => this.nav('/resolutions')
          }
        ]
      },
      {
        label: 'Rozporządzenia',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Rozporządzenia1',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Rozporządzenia2',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Rozporządzenia3',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Rozporządzenia4',
            icon: 'pi pi-fw pi-align-justify'
          }
        ]
      },
      {
        label: 'Użytkownicy',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Dodaj użytkownika',
            icon: 'pi pi-fw pi-user-plus',

          },
          {
            label: 'Lista użytkowników',
            icon: 'pi pi-fw pi-users',
            command: () => this.nav('/user')
          },
          {
            label: 'Wyszukaj',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: 'O Kancelarii',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Kontakt',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Mapa dojazdu',
                icon: 'pi pi-fw pi-calendar-plus'
              },
            ]
          },
          {
            label: 'Specjalizacje',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Lista sprcjalizacji',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          },
          {
            label: 'Pomoc online',
            icon: 'pi pi-fw pi-calendar-times',
          }

        ]
      },
      {
        label: 'Kariera',
        icon: 'pi pi-fw pi-file',
      }
    ];

  }
  nav(url) {
    this.router.navigateByUrl(url);
  }
}
