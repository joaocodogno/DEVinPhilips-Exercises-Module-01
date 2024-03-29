import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week_09';

  personagem: any = {
    nome: 'Saul Goodman',
    imagem: '/assets/saul-goodman.webp',
    nomeAtor: 'Bob Odenkirk',
    descricao: 'Robert John "Bob" Odenkirk (Berwyn, 22 de outubro de 1962) é um ator, comediante, roteirista, diretor e produtor norte-americano, mais conhecido por interpretar o advogado trambiqueiro Saul Goodman'
  }
}
