import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { IPensamento } from '../pensamento/interface.pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  pensamento: IPensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ) {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe()

    this.router.navigate(['/listarPensamento'])
  }

}
