import { Component } from '@angular/core';
import { IPensamento } from '../pensamento/interface.pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

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
  titulo = 'Meu Mural'

  constructor(
    private service: PensamentoService,
    private router: Router
    ) { }

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
    this.titulo = 'Meus Favoritos'
    this.favorito = true
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;

    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe(pensamentos => {
      this.listaPensamentos = pensamentos
      this.listaFavoritos = pensamentos
    })
  }

  recarregarComponente() {
    this.paginaAtual = 1;

    this.router.navigate([this.router.url]);
  }
}
