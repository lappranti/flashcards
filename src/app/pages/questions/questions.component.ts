import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInOut } from 'src/app/shared/services/animations';
import { QuestionsService } from 'src/app/shared/services/questions.service';
import { ThemeService } from 'src/app/shared/services/theme.service';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [fadeInOut]
})
export class QuestionsComponent implements OnInit {
  currentTheme!: string;
  currentQuestionList!: any;

  choose: boolean = false;
  currentIndex: number = 0;
  currentQuestion!: any;
  selectedResponseIndex!: number;

  correctAnswers: number = 0;
  incorrectAnswers: number = 0;

  listeMessages: any[] = [
    `Félicitations ! Vous avez obtenu un score parfait. Bravo !`,
    `Excellent travail ! Vous avez presque atteint la perfection.`,
    `Pas mal du tout ! Vous êtes sur la bonne voie.`,
    `Vous pouvez faire mieux ! Continuez à vous entraîner.`,
    `Ne vous découragez pas ! L'apprentissage est un processus.`
  ];
  currentMessage!: string;

  constructor(
    private route: ActivatedRoute,
    private api: QuestionsService,
    private themeService: ThemeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Recuperer le current theme
    this.themeService.getCurrentTheme().subscribe(resp => {
      this.currentTheme = resp;
    });

    // Utilisez snapshot pour obtenir l'ID de la route
    const id = this.route.snapshot.params['id'];
    this.api.getQuestion(id).subscribe(resp => {
      this.currentQuestionList = resp.questionList;
      this.currentQuestion = this.currentQuestionList[this.currentIndex];
    });

    this.setProgressionBar();
  }

  handleSelectedResponse(index: number) {
    if (this.choose) {
      return;
    }
    this.choose = true;
    if (this.currentIndex < 10) {
      this.currentIndex++;
    }
    this.selectedResponseIndex = index;

    this.setingSelectedChoiceElement();
    this.setProgressionBar();
  }

  handleGetNextQuestion() {
    this.currentQuestion = this.currentQuestionList[this.currentIndex];
    this.choose = false;
  }

  setProgressionBar() {
    const loader = document.querySelector('.content-progres') as HTMLElement;
    const widthLayout = window.innerWidth;
    loader.style.width = (this.currentIndex * widthLayout) / 10 + 'px';
  }

  setingSelectedChoiceElement() {
    const selectedElement = document.getElementById(
      '' + this.selectedResponseIndex
    );
    selectedElement?.classList.add('selected-element');
    this.selectedResponseIndex === +this.currentQuestion.response.index
      ? (selectedElement?.classList.add('correct'), this.correctAnswers++)
      : (selectedElement?.classList.add('incorrect'), this.incorrectAnswers++);

    if (this.currentIndex == 10) {
      this.genereMessage();
      this.createConfetti();
    }
  }

  genereMessage() {
    if (this.correctAnswers == 10) {
      this.currentMessage = this.listeMessages[0];
    } else if (this.correctAnswers == 8 || this.correctAnswers == 9) {
      this.currentMessage = this.listeMessages[1];
    } else if (this.correctAnswers >= 5 && this.correctAnswers <= 7) {
      this.currentMessage = this.listeMessages[2];
    } else if (this.correctAnswers == 3 || this.correctAnswers == 4) {
      this.currentMessage = this.listeMessages[3];
    } else if (this.correctAnswers >= 0 && this.correctAnswers <= 2) {
      this.currentMessage = this.listeMessages[4];
    }
  }

  createConfetti() {
    const canvas = document.getElementById('myCanvas') as
      | HTMLCanvasElement
      | undefined;

    if (canvas) {
      const myConfetti = confetti.create(canvas, { resize: true });
      // Utilisez myConfetti pour déclencher l'animation de confettis
      myConfetti({
        particleCount: 100,
        spread: 70,
        startVelocity: 30,
        ticks: 200,
        colors: ['#FF0000', '#00FF00', '#0000FF']
      });
    } else {
      console.error("L'élément canvas n'a pas été trouvé.");
    }
  }

  handleGotoHome() {
    this.router.navigate(['flashcards']);
  }
}
