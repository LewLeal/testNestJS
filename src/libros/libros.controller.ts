import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { Libro } from './intefaces/libros.intereces';
import {CreateBookDto} from './dto/create-Book.dto';

@Controller('libros')
export class LibrosController {
  constructor(private librosService: LibrosService){};

  @Get()
  buscarLibros(): Libro[] {
    return this.librosService.listarTodo();
  }
  @Get(':id')
  infoLibro(@Param('id') id:string): Libro {
    return this.librosService.infoLibro(parseInt(id));
  }
  @Post()
  crearLibro(@Body() infoLibro: CreateBookDto){
    this.librosService.createBook(infoLibro);
  }
  @Put(':id')
  updateBook(@Param('id') id: string, @Body() updateBooks: Libro): void{
      this.librosService.editarLibro(parseInt(id), updateBooks);
  }
  @Delete(':id')
  deleteBookId(@Param('id') id: string): void{
      this.librosService.eliminarLibro(parseInt(id));
  }

}
