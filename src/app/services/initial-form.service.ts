import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { notifyMeData } from '../shared/notifyMeData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitialFormService {

  constructor(private http: HttpClient) { }

  //метод имитирует отправку данных на сервер и выводит значения полей формы в консоль
  postFormData(form : notifyMeData):Observable<notifyMeData>{
    console.log(form);

    let url = 'localhost:4200';

    const httpOptions ={
      headers : new HttpHeaders({'Content-type':'application/json'})
    };

    return this.http.post<notifyMeData>(url, form, httpOptions);
  }
}
