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
  favorito = false
  listaFavoritos: IPensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe(pensamentos => this.listaPensamentos = pensamentos);
  }

  CarregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favorito).subscribe(pensamentos => {
      this.listaPensamentos.push(...pensamentos);

      if (!pensamentos.length) {
        this.haMaisPensamentos = false
      }
    })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;

    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe(pensamentos => {
      this.listaPensamentos = pensamentos
    })
  }

  listarFavoritos() {
    this.favorito = true
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;

    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe(pensamentos => {
      this.listaPensamentos = pensamentos
      this.listaFavoritos = pensamentos
    })
  }

  recarregarComponente() {
    location.reload();
  }
}
