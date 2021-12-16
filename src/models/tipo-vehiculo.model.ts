import {Entity, model, property} from '@loopback/repository';

@model()
export class TipoVehiculo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  constructor(data?: Partial<TipoVehiculo>) {
    super(data);
  }
}

export interface TipoVehiculoRelations {
  // describe navigational properties here
}

export type TipoVehiculoWithRelations = TipoVehiculo & TipoVehiculoRelations;
