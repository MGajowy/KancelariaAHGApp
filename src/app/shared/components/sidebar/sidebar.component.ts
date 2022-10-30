import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthServiceService } from 'src/app/core/services/auth/auth-service.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  items: MenuItem[];
  isLogged: boolean;
  isVisible: boolean = false;
  listRoles: any;

  constructor(
    private router: Router,
    private authservice: AuthServiceService
    ) { }

  ngOnInit() {
    this.checkUserIsLogged()

    if (this.isLogged) {
      this.checkRoleIsAdmin();
    }

    this.loadMenu();
  }

  checkUserIsLogged() {
   this.isLogged = this.authservice.isUserLoggedIn();
  }

  checkRoleIsAdmin() {
    this.authservice.getRoles().subscribe(res => {
      this.listRoles = res;
      this.listRoles.forEach(element => {
        if (element == 'ADMIN') {
          this.isVisible = true;
          this.loadMenu();
        } 
      });
      
    })
  }

  loadMenu() {
    this.items = [
      {
        label: 'Administracja',
        icon: 'pi pi-cog',
        visible: this.isVisible,
        items: [
          {
            label: 'Użytkownicy',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Dodaj użytkownika',
                icon: 'pi pi-fw pi-user-plus',
                command: () => this.nav('/office/add-user')
              },
              {
                label: 'Lista użytkowników',
                icon: 'pi pi-fw pi-users',
                command: () => this.nav('/office/user-list')
              },
            ]
          },
          {
            label: 'Monitoring',
            icon: 'pi pi-fw pi-video',
            items: [
              {
                label: 'Dziennik zdarzen',
                icon: 'pi pi-chart-bar',
                command: () => this.nav('/office/event-log')
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
            visible: this.isVisible,
            items: [
              {
                label: 'Dodaj kategorie',
                icon: 'pi pi-folder',
                command: () => this.nav('/office/add-category-resolutions')
              },
              {
                label: 'Dodaj uchwałe',
                icon: 'pi pi-fw pi-file',
                command: () => this.nav('/office/add-resolutions')
              }
            ]
          },
          {
            label: 'Kategorie uchwał',
            icon: 'pi pi-folder-open',
            visible: this.isVisible,
            command: () => this.nav('/office/category-resolutions')
          },
          {
            label: 'Lista uchwał',
            icon: 'pi pi-fw pi-file',
            command: () => this.nav('/office/list-resolutions')
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
            visible: this.isVisible,
            items: [
              {
                label: 'Dodaj kategorie',
                icon: 'pi pi-folder',
                command: () => this.nav('/office/add-category-regulations')
              },
              {
                label: 'Dodaj rozporządzenia',
                icon: 'pi pi-fw pi-file',
                command: () => this.nav('/office/add-regulations')
              }
            ]
          },
          {
            label: 'Kategorie rozporzadzen',
            icon: 'pi pi-folder-open',
            visible: this.isVisible,
            command: () => this.nav('/office/category-regulations')
          },
          {
            label: 'Lista rozporzadzen',
            icon: 'pi pi-fw pi-file',
            command: () => this.nav('/office/list-regulations')
          }
        ]
      },
      {
        label: 'O Kancelarii',
        icon: 'pi pi-info-circle',
        // expanded: true,
        items: [
          {
            label: 'Kontakt',
            icon: 'pi pi-envelope',
            items: [
              {
                label: 'Mapa dojazdu',
                icon: 'pi pi-compass',
                command: () => this.nav('/office/access-map')
              },
            ]
          },
          {
            label: 'Specjalizacje',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Lista specjalizacji',
                icon: 'pi pi-fw pi-calendar-minus',
                command: () => this.nav('/office/specialization')
              }
            ]
          },
          {
            label: 'Pomoc online',
            icon: 'pi pi-fw pi-calendar-times',
            command: () => this.nav('/office/online-help')
          }

        ]
      },
      {
        label: 'Kariera',
        icon: 'pi pi-info',
        command: () => this.nav('/office/career')
      }
    ];
  }

  nav(url) {
    this.router.navigateByUrl(url);
  }
}
