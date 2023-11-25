import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../../core/api/api-devices.service';
import { Device } from '../../shared/models/device.model';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  devices: Device[] = [];

  constructor(private devicesService: DevicesService) {
  }

  ngOnInit() {
    this.devicesService.getAll()
      .subscribe(devices => {
        this.devices = devices;
      });
  }
}
