import {belongsTo, Entity, model, property} from '@loopback/repository';
import {ClienteVehiculo} from './cliente-vehiculo.model';
import {Estado} from './estado.model';

@model({
  settings: {
    foreignKeys: {
      fk_plaza_estadoId: {
        name: 'fk_plaza_estadoId',
        entity: 'Estado',
        entityKey: 'id',
        foreignKey: 'estadoId',
      },
      fk_plaza_clienteVehiculoId: {
        name: 'fk_plaza_clienteVehiculoId',
        entity: 'ClienteVehiculo',
        entityKey: 'id',
        foreignKey: 'clienteVehiculoId',
      }
    },
  },
})
export class Plaza extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @belongsTo(() => Estado)
  estadoId: number;

  @belongsTo(() => ClienteVehiculo)
  clienteVehiculoId: number;

  constructor(data?: Partial<Plaza>) {
    super(data);
  }
}

export interface PlazaRelations {
  // describe navigational properties here
}

export type PlazaWithRelations = Plaza & PlazaRelations;
