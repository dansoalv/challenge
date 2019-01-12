import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'https://www.gbm.com.mx/Mercados/ObtenerDatosGrafico?empresa=IPC';

@Injectable({
  providedIn: 'root'
})
export class GbmService {

constructor(private _http: HttpClient) { }

getDataToGraph(): Observable<any> {
  return this._http.get<any>(API);
}

}
