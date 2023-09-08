import { Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/shared/services/animations';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations: [fadeInOut]
})
export class FaqComponent implements OnInit {
  theme!: string;
  faqList: any[] = [
    {
      title: `Pourquoi ne puis-je pas voir la réponse correcte apres une mauvaise reponse?`,
      text: `Lorsque vous répondez incorrectement à une question, vous pourrez y répondre à nouveau à l'avenir . L'objectif est de vous inciter à y réfléchir à nouveau lorsque l'information n'est pas fraîche dans votre mémoire. Cela favorise la rétention de l'information à long terme.`
    }
  ];

  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.theme = theme;
    });
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
