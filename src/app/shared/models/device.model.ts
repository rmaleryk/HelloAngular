import { DeviceType } from '../enums/device-type.enum';

export class Device {
  id: number;
  name: string;
  type: DeviceType;

  constructor(id: number, name: string, type: DeviceType) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}
