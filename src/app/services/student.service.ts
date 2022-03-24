import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = "http://localhost:3000/students"

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get(apiUrl)
  }

  getStudent(id : number){
    return this.http.get(`${apiUrl}/${id}`)
  }

  deleteStudent(id : number){
    return this.http.delete(`${apiUrl}/${id}`)
  }


}