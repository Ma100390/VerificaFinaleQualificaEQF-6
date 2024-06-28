import { Injectable } from '@angular/core';
import { Formaggi } from './formaggi';

@Injectable({
  providedIn: 'root'
})
export class DatiService {

  constructor() { }
  getLISTA(): Formaggi[] {
    return [
      {
        titolo: "Pasta Cacio e Pepe",
        ingredienti: "Formaggio pecorino,  Pasta",
        procedimento: "1. Cuoci la pasta. 2. Prepara la salsa con i formaggi. 3. Mescola tutto.",
        difficolta: 3,
        immagine:"assets/1.jpeg"
      },
      {
        titolo: "Risotto Gorgonzola",
        ingredienti: "Formaggio gorgonzola, Pane, Burro",
        procedimento: "Rosola la cipolla, aggiungi il riso, il brodo e il gorgonzola. Cuoci fino a quando il riso è cremoso.",
        difficolta: 2,
        immagine: "assets/2.jpeg"
      },
      {
        titolo: "Risotto 1 ",
        ingredienti: "Formaggio , Pane, Burro",
        procedimento: "Rosola la cipolla, aggiungi il riso, il brodo e il gorgonzola. Cuoci fino a quando il riso è cremoso..",
        difficolta: 2,
        immagine:"assets/1.jpeg"
      },
      {
        titolo: "Risotto 2 ",
        ingredienti: "Formaggio , Pane, Burro",
        procedimento: "Rosola la cipolla, aggiungi il riso, il brodo e il gorgonzola. Cuoci fino a quando il riso è cremoso..",
        difficolta: 2,
        immagine:"assets/2.jpeg"
      },
      {
        titolo: "Risotto 3 ",
        ingredienti: "Formaggio , Pane, Burro",
        procedimento: "Rosola la cipolla, aggiungi il riso, il brodo e il gorgonzola. Cuoci fino a quando il riso è cremoso..",
        difficolta: 2,
        immagine: "assets/1.jpeg"
      }
    ];  
  }
}