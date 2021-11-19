import { Injectable } from '@nestjs/common';
import { Libro } from './intefaces/libros.intereces';

@Injectable()
export class LibrosService {


    private readonly libros: Libro[] = [];

    private findId(id: number): number {
        let indice: number;
        this.libros.forEach(function (libro: Libro, index: number) {
            if(libro.libro_id === id) {
                indice = index;
            }
        })
        return indice;
    }
    // Una funcion para crear nuestros libros

    createBook(infoLibro) {
        // Funcion para agregar Id
        let lastId: number;
        function addId(matrixLibros): number {
            if (matrixLibros.length > 0) {
                lastId = matrixLibros[matrixLibros.length - 1].libro_id + 1;
                return lastId;

            } else {
                return lastId = 1;
            }

        }
        // Funcion push para nuestro array

        let nuevoLibro = {
            libro_id: addId(this.libros),
            ...infoLibro
        }
        this.libros.push(nuevoLibro);
    }
    // Una funcion para consultar todos los libros

    listarTodo(): Libro[] {
        return this.libros
    }
    // Una funcion para consultar un libro especifico
infoLibro(id: number): Libro {
    return this.libros[this.findId(id)];
}

    // Una funcion para editar un libro

    editarLibro(id: number, infoLibro: Libro): void {
        const indice = this.findId(id);
        this.libros.splice(indice, 1, infoLibro);
       

    }
    // Una funcion para eliminar un lobro
    eliminarLibro(id:number){
        const indice = this.findId(id);
        this.libros.splice(indice, 1);
    }
}
