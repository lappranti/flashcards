import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut } from 'src/app/shared/services/animations';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.scss'],
  animations: [fadeInOut]
})
export class FlashcardsComponent {
  theme!: string;

  flashcardList: any[] = [
    {
      id: '1',
      text: 'Basic Functions',
      link: 'functions'
    },
    {
      id: '2',
      text: 'String',
      link: 'string'
    },
    {
      id: '3',
      text: 'Number',
      link: 'number'
    },
    {
      id: '4',
      text: 'Variables',
      link: 'variables'
    },
    {
      id: '5',
      text: 'Conditions',
      link: 'conditions'
    },
    {
      id: '6',
      text: 'Array I',
      link: 'array-I'
    },
    {
      id: '7',
      text: 'Arrays II & callbacks',
      link: 'array-II'
    },
    {
      id: '8',
      text: 'Les fonctions avancées',
      link: 'advanced-function'
    },
    {
      id: '9',
      text: 'Les objets en JavaScript',
      link: 'objects'
    },

    {
      id: '10',
      text: 'Les événements et les interactions',
      link: 'events'
    }
  ];

  constructor(private themeService: ThemeService, private router: Router) {}

  ngOnInit(): void {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.theme = theme;
    });
  }

  gotoFlashcard(link: string) {
    this.router.navigate(['flashcards', link]);
  }

  isLoading: boolean = false;

  // Vous pouvez mettre à jour isLoading lorsque vous démarrez ou terminez une opération de chargement
  startLoading() {
    this.isLoading = true;
    // Démarrez votre opération de chargement ici
  }

  stopLoading() {
    this.isLoading = false;
    // Terminez votre opération de chargement ici
  }
}
