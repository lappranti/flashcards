import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isPasswordTouched: boolean = false;
  theme: string = '';

  constructor(
    private serviceTheme: ThemeService,
    private router: Router,
    private auhtService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });

    this.loginForm.get('password')?.valueChanges.subscribe(() => {
      this.isPasswordTouched = true;
    });

    //Theme
    this.serviceTheme.getCurrentTheme().subscribe(theme => {
      this.theme = theme;
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      //console.log(this.loginForm.value);
      if (
        this.auhtService.login(
          this.loginForm.value.email,
          this.loginForm.value.password
        )
      ) {
        this.gotoFlashcards();
      }
    }
  }

  togglePasswordView() {
    //Toggle Password
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;
    const togglePassword = document.getElementById('toggle-password');
    const icon = document.querySelector('#toggle-password .bi');

    if (togglePassword) {
      togglePassword.addEventListener('click', function(e) {
        e.stopImmediatePropagation();
        if (passwordInput) {
          if (passwordInput.type == 'password') {
            passwordInput.type = 'text';
            icon?.classList.add('bi-eye-slash'); // Icône d'œil
            icon?.classList.remove('bi-eye-fill');
          } else {
            passwordInput.type = 'password';
            icon?.classList.add('bi-eye-fill'); // Icône d'œil barré
            icon?.classList.remove('bi-eye-slash');
          }
        }
      });
    }
  }

  gotoFlashcards() {
    this.router.navigate(['flashcards']);
  }
}
