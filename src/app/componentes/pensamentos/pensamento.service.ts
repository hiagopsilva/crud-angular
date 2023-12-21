import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import { IPensamento } from './pensamento/interface.pensamento';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(page: number, filter: string, favorite: boolean): Observable<IPensamento[]> {
    const pageLimit = 6;

    let params = new HttpParams().set('_page', page.toString()).set('_limit', pageLimit.toString());

    if(filter.trim().length > 2) {
      params = params.set('q', filter);
    }

    if (favorite) {
      params = params.set('favorito', true);
    }
    return this.http.get<IPensamento[]>(this.API, { params });
  }

  listarPensamentosFavoritos(page: number, filter: string) : Observable<IPensamento[]>{
    const pageLimit = 6;

    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', pageLimit.toString())
      .set('favorito', true);

    if(filter.trim().length > 2) {
      params = params.set('q', filter);
    }

    return this.http.get<IPensamento[]>(this.API, { params });
  }

  criar(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.post<IPensamento>(this.API, pensamento);
  }

  excluir(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<IPensamento>(url)
  }

  buscarPorId(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<IPensamento>(url)
  }

  editar(pensamento: IPensamento): Observable<IPensamento> {
      const url = `${this.API}/${pensamento.id}`
      return this.http.put<IPensamento>(url, pensamento )
  }

  mudarFavorito(pensamento: IPensamento): Observable<IPensamento> {
    pensamento.favorito = !pensamento.favorito;

    const url= `${this.API}/${pensamento.id}`;

    return this.editar(pensamento);
  }
}
