import { Component, OnInit } from '@angular/core';
import { Formaggi } from '../formaggi';
import { DatiService } from '../dati.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    selectedCard: Formaggi | undefined;
    formaggi: Formaggi[] = [];
    datiService: any;
  
    constructor(private DatiService: DatiService) {}
  
    ngOnInit(): void {
      this.formaggi = this.DatiService.getLISTA();
    }
  
    setSelectedCard(formaggi: Formaggi): void {
      this.selectedCard = formaggi;
    }
  }