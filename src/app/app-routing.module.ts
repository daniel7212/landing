import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { BlogComponent } from './blog/blog.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'sobre-nosotros',
    component: SobreNosotrosComponent,
  },
  {
    path: 'detalle-producto',
    component: DetalleProductoComponent,
  },
  {
    path: 'carrito',
    component: CarritoComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'inicio',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
