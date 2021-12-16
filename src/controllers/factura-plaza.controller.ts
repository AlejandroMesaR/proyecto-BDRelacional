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
  Plaza,
} from '../models';
import {FacturaRepository} from '../repositories';

export class FacturaPlazaController {
  constructor(
    @repository(FacturaRepository)
    public facturaRepository: FacturaRepository,
  ) { }

  @get('/facturas/{id}/plaza', {
    responses: {
      '200': {
        description: 'Plaza belonging to Factura',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Plaza)},
          },
        },
      },
    },
  })
  async getPlaza(
    @param.path.number('id') id: typeof Factura.prototype.id,
  ): Promise<Plaza> {
    return this.facturaRepository.plaza(id);
  }
}
