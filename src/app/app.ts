import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { Footer } from "./footer/footer";
  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass, RouterLink, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}


