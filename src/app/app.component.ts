import {HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'labs-angular-cypress-mockserver';
  list$:Observable<number[]>;

  constructor(httpClient: HttpClient) {
    this.list$ = httpClient.get<number[]>('http://localhost:5005/api/list');
  }
}
