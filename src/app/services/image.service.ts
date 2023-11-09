import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  private getHttpOptions() {
    const token = localStorage.getItem('accesstoken');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }
  getImageById(id: number) {
    return this.http.get(`http://localhost:3000/api/image/${id}`, {
      responseType: 'blob',
    });
  }

  postImage(formData: FormData) {
    return this.http.post(
      'http://localhost:3000/api/image',
      formData,
      this.getHttpOptions()
    );
  }
}
