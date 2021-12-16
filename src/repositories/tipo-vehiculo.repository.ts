import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {TipoVehiculo, TipoVehiculoRelations} from '../models';

export class TipoVehiculoRepository extends DefaultCrudRepository<
  TipoVehiculo,
  typeof TipoVehiculo.prototype.id,
  TipoVehiculoRelations
> {
  constructor(
    @inject('datasources.MySQL') dataSource: MySqlDataSource,
  ) {
    super(TipoVehiculo, dataSource);
  }
}
