import { Component } from '@angular/core';
import { IPensamento } from '../pensamento/interface.pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos: IPensamento[] = [];
  paginaAtual = 1;
  haMaisPensamentos= true;
  filtro = '';

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe(pensamentos => this.listaPensamentos = pensamentos);
  }

  CarregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro).subscribe(pensamentos => {
      this.listaPensamentos.push(...pensamentos);

      if (!pensamentos.length) {
        this.haMaisPensamentos = false
      }
    })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;

    this.service.listar(this.paginaAtual, this.filtro).subscribe(pensamentos => {
      this.listaPensamentos = pensamentos
    })
  }
}
