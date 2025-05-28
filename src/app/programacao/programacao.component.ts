import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoCardComponent } from '../evento-card/evento-card.component';
import { HoverBorderDirective } from '../shared/directives/hover-border.directive';

interface Evento {
  id: number;
  titulo: string;
  data: string;
  horario: string;
  local: string;
}

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [CommonModule, EventoCardComponent, HoverBorderDirective],
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.css']
})
export class ProgramacaoComponent {
  eventos: Evento[] = [
    {
      id: 1,
      titulo: 'Kick-off',
      data: '26 de maio',
      horario: '19H00',
      local: 'ONLINE'
    }
  ];

  eventoInscrito: number | null = null;

  participar(evento: Evento) {
    this.eventoInscrito = evento.id;
  }
}
