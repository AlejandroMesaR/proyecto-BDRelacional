import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_clienteVehiculo_placasVehiculo: {
        name: 'fk_clienteVehiculo_placasVehiculo',
        entity: 'Vehiculo',
        entityKey: 'placas',
        foreignKey: 'placasVehiculo',
      },
      fk_clienteVehiculo_cedulaCliente: {
        name: 'fk_clienteVehiculo_cedulaCliente',
        entity: 'Cliente',
        entityKey: 'cedula',
        foreignKey: 'cedulaCliente',
      }
    },
  },
})
export class ClienteVehiculo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  placasVehiculo?: string;

  @property({
    type: 'string',
  })
  cedulaCliente?: string;

  constructor(data?: Partial<ClienteVehiculo>) {
    super(data);
  }
}

export interface ClienteVehiculoRelations {
  // describe navigational properties here
}

export type ClienteVehiculoWithRelations = ClienteVehiculo & ClienteVehiculoRelations;
