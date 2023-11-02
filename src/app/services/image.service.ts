import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  getImageById(id: number) {
    return this.http.get(`http://localhost:3000/api/image/${id}`, {
      responseType: 'blob',
    });
  }

  postImage(formData: FormData) {
   
    return this.http.post('http://localhost:3000/api/image', formData);
  }
}
