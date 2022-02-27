import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { notifyMeData } from './../shared/notifyMeData';
import { InitialFormService } from '../services/initial-form.service';

@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.scss']
})
export class InitialFormComponent implements OnInit {

  //определяем форму
  notifyMeForm!: FormGroup;
  notifyMe!: notifyMeData;

  //поле, опеределяющее видимость модального окна
  ModalDialogVisibility = false;
  //определяет значение поля адреса
  selectedAddress='';

  constructor(private fb: FormBuilder, private formService: InitialFormService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  //метод инициализирует форму и определяет параметры для валидации полей
  createForm() {
    this.notifyMeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email]
      ],
      tel: ['', [
        Validators.required,
        Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)]
      ],
      address: ['', Validators.required],
      time: ['', Validators.required],
      personalData: [false, Validators.required],
      notifyMe: false
    })
  }

  //выполняется при нажатии на кнопку "Отправить"
  onSubmit() {
    //присваиваем данные формы в объект класса
    this.notifyMe = this.notifyMeForm.value;
    //используем сервис для отправки данных на сервер
    this.formService.postFormData(this.notifyMe);

    //обнуляет данные полей формы
    this.notifyMeForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      address: '',
      time: '',
      personalData: false,
      notifyMe: false
    });
  }

  //метод меняет видимость элементов(необходимо для переключения между разными частями формы)
  changeVisibility(elemToHide: any, elemToShow: any): void {
    elemToHide.style.display = "none";
    elemToShow.style.display = "block";
  }

  //метод меняет видимоть модального окна и меняет значение поля адрес
  changeModalDialogVisibility(address:string){
    this.ModalDialogVisibility = !this.ModalDialogVisibility;
    this.selectedAddress = address;
  }

}
