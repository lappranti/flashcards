import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'currentThemeFlashcard';
  private readonly availableThemes = ['light', 'dark'];
  private currentThemeSubject: BehaviorSubject<string>;

  constructor() {
    const savedTheme = localStorage.getItem(this.themeKey);
    const initialTheme =
      savedTheme && this.availableThemes.includes(savedTheme)
        ? savedTheme
        : this.availableThemes[0];
    this.currentThemeSubject = new BehaviorSubject<string>(initialTheme);
  }

  getCurrentTheme() {
    return this.currentThemeSubject.asObservable();
  }

  setTheme(theme: string) {
    if (this.availableThemes.includes(theme)) {
      localStorage.setItem(this.themeKey, theme);
      this.currentThemeSubject.next(theme);
    }
  }
}
