import {Entity, model, property} from '@loopback/repository';

@model()
export class TipoServicio extends Entity {
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
  nombreServicio: string;

  @property({
    type: 'number',
    required: true,
  })
  tarifaServicio: number;


  constructor(data?: Partial<TipoServicio>) {
    super(data);
  }
}

export interface TipoServicioRelations {
  // describe navigational properties here
}

export type TipoServicioWithRelations = TipoServicio & TipoServicioRelations;
