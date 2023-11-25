import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Device } from '../../shared/models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  private readonly apiHost = 'https://localhost:7100';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Device[]> {
    return this.httpClient.get<any>(`${this.apiHost}/devices`)
      .pipe(
        map(response => (response.data as any[])
          .map(device => new Device(device.id, device.name, device.type)))
      );
  }
}