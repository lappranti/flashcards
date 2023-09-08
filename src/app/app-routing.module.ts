import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FlashcardsComponent } from './pages/flashcards/flashcards.component';
import { FaqComponent } from './pages/faq/faq.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'flashcards',
    component: FlashcardsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'faq',
    component: FaqComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'flashcards/:id',
    component: QuestionsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
