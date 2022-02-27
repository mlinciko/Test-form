import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DecoderService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  //метод возвращает ответ с сервера по ссылке с заданными значениями координат
  getAddress(lat:any, lng: any):Observable<any>{
    //ключ доступа к google maps api
    let key = 'AIzaSyD9LdhddC45WUTAsiR3JqsXSbNEvYwLA-A';

    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`

    //используем httpModule для получения ответа по заданной ссылке
    return this.http.get(url)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}

