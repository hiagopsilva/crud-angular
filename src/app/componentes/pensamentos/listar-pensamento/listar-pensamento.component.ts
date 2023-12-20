import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      id: '1',
      conteudo: 'Aprendendo Angular',
      autoria: 'DEV',
      modelo: 'modelo1'
    },
    {
      id: '2',
      conteudo: 'Aprendendo Angular 2',
      autoria: 'DEV',
      modelo: 'modelo2'
    },
    {
      id: '2',
      conteudo: ',Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3Aprendendo Angular 3',
      autoria: 'DEV',
      modelo: 'modelo3'
    }
  ];
}
