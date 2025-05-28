import { Component } from '@angular/core';
import { Evento } from '../models/evento.js';

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.css']
})
export class ProgramacaoComponent {
  eventos: Evento[] = [
    { id: 1, titulo: 'Kick-off', data: '26 de maio', horario: '19H00', local: 'ONLINE' }
  ];

  inscricoes: number[] = [];

  inscrever(id: number) {
    if (!this.inscricoes.includes(id)) {
      this.inscricoes.push(id);
    }
  }

  isInscrito(id: number): boolean {
    return this.inscricoes.includes(id);
  }
}
