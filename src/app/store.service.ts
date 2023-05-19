import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, limit, orderBy, query, setDoc, where } from '@angular/fire/firestore';
import { Usuario } from './user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private fs: Firestore) { }

  async addUsuario(usuario: Usuario) {
    const userNew = await collection(this.fs, 'Usuarios');
    return addDoc(userNew, usuario);
  }

  getUsuario(value: any, limite: number): Observable<Usuario[]> {
    const userNew = query(collection(this.fs, 'Usuarios'), orderBy("date", value));
    return collectionData(userNew, { idField: 'id' }) as Observable<Usuario[]>;
  }

  async deleteUsuario(id: string) {
    const userNew = await doc(this.fs, `Usuarios/${id}`);
    return deleteDoc(userNew);
  }
}
