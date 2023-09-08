import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme: string = '';

  @Input() addSidebar: boolean = false;
  @Input() currentPage: string = '';

  showSidebar: boolean = false;
  showModal: boolean = false;

  itemMenuList: any[] = [
    {
      id: '1',
      text: 'Flashcards',
      url: 'flashcards',
      icon: 'bi bi-house',
      isActive: false
    },

    {
      id: '2',
      text: 'Faq',
      url: 'faq',
      icon: 'bi bi-question-circle',
      isActive: false
    },
    {
      id: '3',
      text: 'Log Out',
      url: 'login',
      icon: 'bi bi-box-arrow-right',
      isActive: false
    }
  ];

  constructor(
    private serviceTheme: ThemeService,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.serviceTheme.getCurrentTheme().subscribe(theme => {
      this.theme = theme;
    });

    this.closeModal();
    if (this.addSidebar) this.selecteLink(this.currentPage?.toLowerCase());
  }

  toggleTheme() {
    this.theme = this.theme == 'light' ? 'dark' : 'light';
    this.setTheme();
  }

  toggleLight() {
    this.theme = 'light';
    this.setTheme();
  }
  toggleDark() {
    this.theme = 'dark';
    this.setTheme();
  }

  setTheme() {
    this.serviceTheme.setTheme(this.theme);
  }

  selecteLink(text: string) {
    const currectSelectedLink = this.itemMenuList.filter(
      item => item.text.toLowerCase() === text
    )[0];
    currectSelectedLink.isActive = true;
  }

  toggleModalSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  closeModal() {
    document.addEventListener('click', event => {
      if (this.showSidebar) {
        const sidebar = document.querySelector('.sidebar');

        if (sidebar) {
          const sidebarStyle = window.getComputedStyle(sidebar);
          const beforeContent = sidebarStyle.getPropertyValue('content');

          if (
            event.target == sidebar ||
            beforeContent.includes('before-content')
          ) {
            this.toggleModalSidebar();
          }
        }
      }
    });
  }

  gotoPage(url: string) {
    console.log(url);

    if (url === 'login') this.authService.logout();
    this.toggleModalSidebar();
    this.router.navigate([url]);
  }
}
