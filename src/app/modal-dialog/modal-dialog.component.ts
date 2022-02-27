import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DecoderService } from '../services/decoder.service';
//declare const google: any;

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {
  //определяем значение как выходное 
  @Output() changeModalDialogVisibility = new EventEmitter<string>();

  //начальное значение ширины и долготы
  lat = 55.75222;
  lng = 37.61556;

  //опеределяет установлен ли маркер на карте
  isMarkerSet = false;

  //поле хранит выбранный адрес
  address = '';

  constructor(private decoderService: DecoderService) { }

  ngOnInit(): void {
  }

  //метод устанавливает маркер и декодирует значение ширины и долготы в строковый адрес
  setMarker(event: any) {
    //присваивает значения текущей ширины и долготы полям
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.isMarkerSet = true;

    //используем сервер для декодировки адреса по координатам
    this.decoderService.getAddress(this.lat, this.lng)
      .subscribe(data => this.address = data.results[0].formatted_address,
        errorMessage => this.address = <string>errorMessage); 
  }

  /*метод закрывает модальное окно карты и(в соответствии с параметром) 
  заполняет поле пустрой строкой или указанным адресом*/
  action(type:string){
    switch (type){
      case 'close':
        this.changeModalDialogVisibility.emit('');
        break;
      case 'confirm':
        this.changeModalDialogVisibility.emit(this.address); 
    }
  }

}
