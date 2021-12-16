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
  ClienteVehiculo,
} from '../models';
import {PlazaRepository} from '../repositories';

export class PlazaClienteVehiculoController {
  constructor(
    @repository(PlazaRepository)
    public plazaRepository: PlazaRepository,
  ) { }

  @get('/plazas/{id}/cliente-vehiculo', {
    responses: {
      '200': {
        description: 'ClienteVehiculo belonging to Plaza',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ClienteVehiculo)},
          },
        },
      },
    },
  })
  async getClienteVehiculo(
    @param.path.number('id') id: typeof Plaza.prototype.id,
  ): Promise<ClienteVehiculo> {
    return this.plazaRepository.clienteVehiculo(id);
  }
}
