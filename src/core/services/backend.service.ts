import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private readonly http: HttpClient) { }

  getHello() {
    console.log(this.http.get<string>(environment.url).subscribe(
      data => {
        console.log(data);
      }
    ));
  }
}
