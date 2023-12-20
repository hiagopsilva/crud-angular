import { Component, Input } from '@angular/core';
import { IPensamento } from './interface.pensamento';

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
}
