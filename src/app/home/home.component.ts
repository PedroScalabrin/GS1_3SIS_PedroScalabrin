import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titulo = 'Global Solution';
  descricao = 'Uma jornada tecnológica rumo ao futuro.';
  dataEvento = '26 de maio';

  destaques = ['Inovação', 'Tecnologia', 'Impacto Social'];

  mostrarDescricao = true;
}
