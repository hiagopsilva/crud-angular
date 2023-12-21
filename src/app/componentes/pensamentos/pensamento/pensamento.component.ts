import { Component, Input } from '@angular/core';
import { IPensamento } from './interface.pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  @Input() pensamento: IPensamento = {
    id: 1,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito: false
  }

  @Input() listaFavoritos: IPensamento[] = []

  constructor(private service: PensamentoService) {

  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito() {
    if (this.pensamento.favorito === false) {
      return 'inativo'
    }

    return 'ativo'
  }

  atualizarFavorito() {
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
    })
  }
}
