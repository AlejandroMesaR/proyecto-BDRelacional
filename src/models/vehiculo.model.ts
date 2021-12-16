import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {ClienteVehiculo} from './cliente-vehiculo.model';
import {Cliente} from './cliente.model';
import {TipoVehiculo} from './tipo-vehiculo.model';

@model({
  settings: {
    foreignKeys: {
      fk_Vehiculo_tipoVehiculoId: {
        name: 'fk_Vehiculo_tipoVehiculoId',
        entity: 'TipoVehiculo',
        entityKey: 'id',
        foreignKey: 'tipoVehiculoId',
      }
    },
  },
})
export class Vehiculo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  placas: string;

  @property({
    type: 'boolean',
    required: true,
  })
  llavesVehiculo: boolean;

  @belongsTo(() => TipoVehiculo)
  tipoVehiculoId: number;

  @hasMany(() => Cliente, {through: {model: () => ClienteVehiculo, keyFrom: 'placasVehiculo', keyTo: 'cedulaCliente'}})
  clientes: Cliente[];

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
