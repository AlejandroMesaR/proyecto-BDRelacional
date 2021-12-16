import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {TipoServicio, TipoServicioRelations} from '../models';

export class TipoServicioRepository extends DefaultCrudRepository<
  TipoServicio,
  typeof TipoServicio.prototype.id,
  TipoServicioRelations
> {
  constructor(
    @inject('datasources.MySQL') dataSource: MySqlDataSource,
  ) {
    super(TipoServicio, dataSource);
  }
}
