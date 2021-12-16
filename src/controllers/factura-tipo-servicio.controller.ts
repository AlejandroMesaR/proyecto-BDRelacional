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
  TipoServicio,
} from '../models';
import {FacturaRepository} from '../repositories';

export class FacturaTipoServicioController {
  constructor(
    @repository(FacturaRepository)
    public facturaRepository: FacturaRepository,
  ) { }

  @get('/facturas/{id}/tipo-servicio', {
    responses: {
      '200': {
        description: 'TipoServicio belonging to Factura',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TipoServicio)},
          },
        },
      },
    },
  })
  async getTipoServicio(
    @param.path.number('id') id: typeof Factura.prototype.id,
  ): Promise<TipoServicio> {
    return this.facturaRepository.tipoServicio(id);
  }
}
