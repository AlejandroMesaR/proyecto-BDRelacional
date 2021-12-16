import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Empleado} from './empleado.model';
import {Plaza} from './plaza.model';
import {TipoServicio} from './tipo-servicio.model';
import {Vehiculo} from './vehiculo.model';

@model({
  settings: {
    foreignKeys: {
      fk_factura_tipoServicioId: {
        name: 'fk_factura_tipoServicioId',
        entity: 'TipoServicio',
        entityKey: 'id',
        foreignKey: 'tipoServicioId',
      },
      fk_factura_plazaId: {
        name: 'fk_factura_plazaId',
        entity: 'Plaza',
        entityKey: 'id',
        foreignKey: 'plazaId',
      },
      fk_factura_empleadoId: {
        name: 'fk_factura_empleadoId',
        entity: 'Empleado',
        entityKey: 'id',
        foreignKey: 'empleadoId',
      },
      fk_factura_placasVehiculo: {
        name: 'fk_factura_placasVehiculo',
        entity: 'Vehiculo',
        entityKey: 'placas',
        foreignKey: 'vehiculoId',
      }
    },
  },
})
export class Factura extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  horaSalida: string;

  @property({
    type: 'number',
    default: 0,
  })
  descuento?: number;

  @property({
    type: 'date',
    required: true,
  })
  horaEntrada: string;

  @belongsTo(() => TipoServicio)
  tipoServicioId: number;

  @belongsTo(() => Vehiculo)
  vehiculoId: string;

  @belongsTo(() => Plaza)
  plazaId: number;

  @belongsTo(() => Empleado)
  empleadoId: number;

  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;
