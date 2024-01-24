import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  ngOnInit() {
    this.actualizarValorTotal();
  }

  valorTotal :number=0;

  producto1 :number=309000;
  producto2 :number=569050;
  producto3 :number=16800;
  producto4 :number=899000;

  productos :any[]=[
    {
      nombre:"CORE I5 1RA",
      imagen:"https://makercomputer.com/wp-content/uploads/2022/01/producto-1-par2.jpg",
      descripcion:"RAM: 4Gb DD: 250 - 320 GB",
      cantidad:1,
      precio:309000,
      valorInicial:309000,
    },
    {
      nombre:"CORE i5 3RA GEN",
      imagen:"https://makercomputer.com/wp-content/uploads/2022/10/2-Dell-All-In-One-core-i5.jpg",
      descripcion:"DDR3",
      cantidad:1,
      precio:400000,
      valorInicial:400000,
    },
    {
      nombre:"Core i3 | 3ra Gen",
      imagen:"https://makercomputer.com/wp-content/uploads/2023/04/4-banner-desktop-dell-core-i3-1.jpg",
      descripcion:"168000",
      cantidad:1,
      precio:168000,
      valorInicial:168000,
    },
    {
      nombre:"CORE I7 4TA",
      imagen:"https://makercomputer.com/wp-content/uploads/2022/01/producto-1-par3.jpg",
      descripcion:"RAM: 4Gb DD: 500 GB",
      cantidad:1,
      precio:899000,
      valorInicial:899000,
    }
  ]

  cambiarCantidad(index:number){
    this.productos[index].precio=this.productos[index].valorInicial*this.productos[index].cantidad;
    this.actualizarValorTotal();
  }

  actualizarValorTotal(){
    this.valorTotal=0;
    this.productos.forEach(element => {
      this.valorTotal+=element.precio;
    });
  }

  eliminarProducto(index :number){
    this.productos.splice(index,1)
    this.actualizarValorTotal();
  }

}
