import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {ClienteVehiculo, ClienteVehiculoRelations} from '../models';

export class ClienteVehiculoRepository extends DefaultCrudRepository<
  ClienteVehiculo,
  typeof ClienteVehiculo.prototype.id,
  ClienteVehiculoRelations
> {
  constructor(
    @inject('datasources.MySQL') dataSource: MySqlDataSource,
  ) {
    super(ClienteVehiculo, dataSource);
  }
}
