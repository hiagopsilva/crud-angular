import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { IPensamento } from '../pensamento/interface.pensamento';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário de pensamento'],
      autoria: ['cascsac'],
      modelo: ['modelo de pensamento']
    });
  }

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe()

    this.router.navigate(['/listarPensamento'])
  }

}
