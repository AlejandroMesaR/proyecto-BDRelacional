import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Plaza, PlazaRelations, Estado, ClienteVehiculo} from '../models';
import {EstadoRepository} from './estado.repository';
import {ClienteVehiculoRepository} from './cliente-vehiculo.repository';

export class PlazaRepository extends DefaultCrudRepository<
  Plaza,
  typeof Plaza.prototype.id,
  PlazaRelations
> {

  public readonly estado: BelongsToAccessor<Estado, typeof Plaza.prototype.id>;

  public readonly clienteVehiculo: BelongsToAccessor<ClienteVehiculo, typeof Plaza.prototype.id>;

  constructor(
    @inject('datasources.MySQL') dataSource: MySqlDataSource, @repository.getter('EstadoRepository') protected estadoRepositoryGetter: Getter<EstadoRepository>, @repository.getter('ClienteVehiculoRepository') protected clienteVehiculoRepositoryGetter: Getter<ClienteVehiculoRepository>,
  ) {
    super(Plaza, dataSource);
    this.clienteVehiculo = this.createBelongsToAccessorFor('clienteVehiculo', clienteVehiculoRepositoryGetter,);
    this.registerInclusionResolver('clienteVehiculo', this.clienteVehiculo.inclusionResolver);
    this.estado = this.createBelongsToAccessorFor('estado', estadoRepositoryGetter,);
    this.registerInclusionResolver('estado', this.estado.inclusionResolver);
  }
}
