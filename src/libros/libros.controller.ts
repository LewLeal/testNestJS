import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {CreateBookDto} from './dto/create-Book.dto';

@Controller('libros')
export class LibrosController {
  @Get()
  buscarLibros(): string {
    return 'Aqui estan todos los libros';
  }
  @Get(':id')
  infoLibro(@Param() params): string {
    console.log(params);
    return `Esto es la informacion del libro #${params.id}`;
  }
  @Post()
  crearLibro(@Body() infoLibro: CreateBookDto): string {
    console.log(infoLibro);
    return `Un Nuevo Libro. Este libro tiene #${infoLibro.pags} pagínas.`;
  }
  @Put(':id')
  updateBook(@Param('id') id: number, @Body() UpdateBooks: CreateBookDto): string {
      return `Esto es la informacion del libro #${id} se ha actualizado`;
  }
  @Delete(':id')
  deleteBookId(@Param('id') id: number): string{
      return `Se elimo el libro con Id  #${id}`;
  }

}
