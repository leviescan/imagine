import { Component, OnInit } from '@angular/core';
import { Usuario } from '../user.interface';
import { FormBuilder } from '@angular/forms';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-parte2',
  templateUrl: './parte2.component.html',
  styleUrls: ['./parte2.component.scss']
})
export class Parte2Component implements OnInit {
  

  users!: Usuario[];
  users1!: any [] ;
  lon!: any [] ;
  value: any;
  limite!: number;
 

  constructor(private fb: FormBuilder, private service: StoreService) {
    this.loadProductLi();
  }
  
  ngOnInit(): void {
    this.toString();
  }

  loadProductLi() {
   
    this.service.getUsuario('desc', this.limite).subscribe(response => {
      this.users = response;
      const comentarios = this.users.map(users => users.coment);
      this.users1 = comentarios;
      console.log(this.users1);
      const longitudes = this.obtenerLongitudes(this.users1);
      this.lon = longitudes;

console.log(longitudes);
    });
  }
 
  obtenerLongitudes(arr: string[]): number[] {
    return arr.map((str: string) => str.length);
  }

  toString(){

    
    
  }


}
