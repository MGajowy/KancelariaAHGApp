import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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
        label: 'Administracja',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Użytkownicy',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Dodaj użytkownika',
            icon: 'pi pi-fw pi-user-plus',
            command: () => this.nav('/kancelaria/add-user')
          },
          {
            label: 'Lista użytkowników',
            icon: 'pi pi-fw pi-users',
            command: () => this.nav('/kancelaria/user-list')
          },
          // {
          //   label: 'Wyszukaj',
          //   icon: 'pi pi-fw pi-users',
          //   items: [
          //     {
          //       label: 'Filter',
          //       icon: 'pi pi-fw pi-filter',
          //       items: [
          //         {
          //           label: 'Print',
          //           icon: 'pi pi-fw pi-print'
          //         }
          //       ]
          //     },
          //     {
          //       icon: 'pi pi-fw pi-bars',
          //       label: 'List'
          //     }
          //   ]
          // }
        ]
          },
          {
            label: 'Monitoring',
            icon: 'pi pi-fw pi-video',
            items: [
              {
                label: 'Dziennik zdarzen',
                icon: 'pi pi-chart-bar',
                command: () => this.nav('/kancelaria/event-log')
              }
            ]
          },
          {
            label: 'Konfiguracja systemu',
            icon: 'pi pi-cog',
            //command: () => this.nav('')
          },
           {
            label: 'Ustawienia strony',
            icon: 'pi pi-cog',
          }
        ]
      },
      {
        label: 'Uchwały',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Dodaj',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Dodaj kategorie',
                icon: 'pi pi-folder',
                command: () => this.nav('/kancelaria/add-category-resolutions')
              },
              {
                label: 'Dodaj uchwałe',
                icon: 'pi pi-fw pi-file'
              }
            ]
          },
          {
            label: 'Kategorie uchwał',
            icon: 'pi pi-folder-open',
            command: () => this.nav('/kancelaria/category-resolutions')
          },
           {
            label: 'Lista uchwał',
            icon: 'pi pi-fw pi-file',
            command: () => this.nav('/kancelaria/list-resolutions')
          }
        ]
      },
      {
        label: 'Rozporządzenia',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Dodaj',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Dodaj kategorie',
                icon: 'pi pi-folder'
              },
              {
                label: 'Dodaj rozporządzenia',
                icon: 'pi pi-fw pi-file'
              }
            ]
          },
          {
            label: 'Kategorie rozporzadzen',
            icon: 'pi pi-folder-open',
            command: () => this.nav('/kancelaria/category-regulations')
          },
          {
            label: 'Lista rozporzadzen',
            icon: 'pi pi-fw pi-file',
            command: () => this.nav('/kancelaria/list-regulations')
          }
        ]
      },
      {
        label: 'O Kancelarii',
        icon: 'pi pi-info-circle',
        items: [
          {
            label: 'Kontakt',
            icon: 'pi pi-envelope',
            items: [
              {
                label: 'Mapa dojazdu',
                icon: 'pi pi-compass'
              },
            ]
          },
          {
            label: 'Specjalizacje',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Lista specjalizacji',
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
        icon: 'pi pi-info',
      }
    ];

  }
  nav(url) {
    this.router.navigateByUrl(url);
  }
}
