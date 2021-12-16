import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Rol} from './rol.model';

@model({
  settings: {
    foreignKeys: {
      fk_empleado_rolId: {
        name: 'fk_empleado_rolId',
        entity: 'Rol',
        entityKey: 'id',
        foreignKey: 'rolId',
      }
    },
  },
})
export class Empleado extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  cedula: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @belongsTo(() => Rol)
  rolId: number;

  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;
