import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_KEY = 'user'; // Clé pour stocker l'utilisateur dans localStorage

  // Simuler un utilisateur authentifié
  private isAuthenticated = false;

  // E-mail de l'utilisateur
  private userEmail: string | null = null;

  constructor() {
    // Vérifier si l'utilisateur est déjà authentifié au chargement de l'application
    const storedUser = localStorage.getItem(this.USER_KEY);
    if (storedUser) {
      this.isAuthenticated = true;
      this.userEmail = JSON.parse(storedUser);
    }
  }

  // Méthode de connexion
  login(email: string, password: string): boolean {
    // Vérifier les informations d'authentification (c'est un exemple simple)
    if (email === 'less@gmail.com' && password === '1234zz') {
      this.isAuthenticated = true;
      this.userEmail = email;
      // Stocker l'utilisateur dans localStorage
      localStorage.setItem(this.USER_KEY, JSON.stringify(email));
      return true;
    }
    return false;
  }

  // Méthode de déconnexion
  logout(): void {
    this.isAuthenticated = false;
    this.userEmail = null;
    // Supprimer l'utilisateur de localStorage
    localStorage.removeItem(this.USER_KEY);
  }

  // Vérifier si l'utilisateur est authentifié
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
