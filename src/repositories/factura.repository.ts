import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Factura, FacturaRelations, TipoServicio, Vehiculo, Plaza, Empleado} from '../models';
import {TipoServicioRepository} from './tipo-servicio.repository';
import {VehiculoRepository} from './vehiculo.repository';
import {PlazaRepository} from './plaza.repository';
import {EmpleadoRepository} from './empleado.repository';

export class FacturaRepository extends DefaultCrudRepository<
  Factura,
  typeof Factura.prototype.id,
  FacturaRelations
> {

  public readonly tipoServicio: BelongsToAccessor<TipoServicio, typeof Factura.prototype.id>;

  public readonly vehiculo: BelongsToAccessor<Vehiculo, typeof Factura.prototype.id>;

  public readonly plaza: BelongsToAccessor<Plaza, typeof Factura.prototype.id>;

  public readonly empleado: BelongsToAccessor<Empleado, typeof Factura.prototype.id>;

  constructor(
    @inject('datasources.MySQL') dataSource: MySqlDataSource, @repository.getter('TipoServicioRepository') protected tipoServicioRepositoryGetter: Getter<TipoServicioRepository>, @repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>, @repository.getter('PlazaRepository') protected plazaRepositoryGetter: Getter<PlazaRepository>, @repository.getter('EmpleadoRepository') protected empleadoRepositoryGetter: Getter<EmpleadoRepository>,
  ) {
    super(Factura, dataSource);
    this.empleado = this.createBelongsToAccessorFor('empleado', empleadoRepositoryGetter,);
    this.registerInclusionResolver('empleado', this.empleado.inclusionResolver);
    this.plaza = this.createBelongsToAccessorFor('plaza', plazaRepositoryGetter,);
    this.registerInclusionResolver('plaza', this.plaza.inclusionResolver);
    this.vehiculo = this.createBelongsToAccessorFor('vehiculo', vehiculoRepositoryGetter,);
    this.registerInclusionResolver('vehiculo', this.vehiculo.inclusionResolver);
    this.tipoServicio = this.createBelongsToAccessorFor('tipoServicio', tipoServicioRepositoryGetter,);
    this.registerInclusionResolver('tipoServicio', this.tipoServicio.inclusionResolver);
  }
}
