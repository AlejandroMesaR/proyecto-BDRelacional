import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Factura,
  Empleado,
} from '../models';
import {FacturaRepository} from '../repositories';

export class FacturaEmpleadoController {
  constructor(
    @repository(FacturaRepository)
    public facturaRepository: FacturaRepository,
  ) { }

  @get('/facturas/{id}/empleado', {
    responses: {
      '200': {
        description: 'Empleado belonging to Factura',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Empleado)},
          },
        },
      },
    },
  })
  async getEmpleado(
    @param.path.number('id') id: typeof Factura.prototype.id,
  ): Promise<Empleado> {
    return this.facturaRepository.empleado(id);
  }
}
