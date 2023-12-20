import { Component } from '@angular/core';
import { IPensamento } from '../pensamento/interface.pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent {

  pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    modelo: '',
    autoria: '',
    favorito: false
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.service.buscarPorId(Number(id)).subscribe(pensamento => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id ).subscribe()

      this.router.navigate(['/listarPensamento'])
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
