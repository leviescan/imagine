import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../user.interface';
import { StoreService } from '../store.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  formU!: FormGroup;
  users!: Usuario[];
  value: any;
  limite!: number;

  constructor(private fb: FormBuilder, private service: StoreService) {
    this.formU = this.fb.group({
      coment: [''],
      date: [Date()],
    });
  }
  ngOnInit(): void {
    this.loadProductLi();
  }

  async onSubmit() {
    this.formU.value.date = Date();
    const response = await this.service.addUsuario(this.formU.value);
    this.formU.reset();
  }

  loadProductLi(ab: any = 'asc') {
    this.value = ab;
    this.service.getUsuario(this.value, this.limite).subscribe(response => {
      this.users = response;
    });
  }

  async onDeleteUser(id: string) {
    if (confirm("Realmente quieres eliminar el comentario?")) {
      await this.service.deleteUsuario(id)
        .then(response => {

        }).catch(error => {

          alert('no se pudo eliminar o no existe en la base de datos');
        });
    }

  }

}
