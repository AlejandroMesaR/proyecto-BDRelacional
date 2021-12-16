import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Empleado, EmpleadoRelations, Rol} from '../models';
import {RolRepository} from './rol.repository';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.id,
  EmpleadoRelations
> {

  public readonly rol: BelongsToAccessor<Rol, typeof Empleado.prototype.id>;

  constructor(
    @inject('datasources.MySQL') dataSource: MySqlDataSource, @repository.getter('RolRepository') protected rolRepositoryGetter: Getter<RolRepository>,
  ) {
    super(Empleado, dataSource);
    this.rol = this.createBelongsToAccessorFor('rol', rolRepositoryGetter,);
    this.registerInclusionResolver('rol', this.rol.inclusionResolver);
  }
}
