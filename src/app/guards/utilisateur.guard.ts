import { forwardRef, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const utilisateurGuard: CanActivateFn = (route, state) => {
  // Vérification si un accesstoken est présent dans le localstorage
  const accessToken = localStorage.getItem('accesstoken');
  const router = inject(forwardRef(() => Router));
  if (accessToken) {
    return true;
    // Si oui retourner vrai
  } else {
    router.navigate(['/accueil']);
    return false;
    // Si non retourner faux
  }
};
