import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Plaza,
  Estado,
} from '../models';
import {PlazaRepository} from '../repositories';

export class PlazaEstadoController {
  constructor(
    @repository(PlazaRepository)
    public plazaRepository: PlazaRepository,
  ) { }

  @get('/plazas/{id}/estado', {
    responses: {
      '200': {
        description: 'Estado belonging to Plaza',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Estado)},
          },
        },
      },
    },
  })
  async getEstado(
    @param.path.number('id') id: typeof Plaza.prototype.id,
  ): Promise<Estado> {
    return this.plazaRepository.estado(id);
  }
}
