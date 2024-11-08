import { Controller, Get, Route, Tags } from 'tsoa';

interface Books {
  id: number;
  name: string;
  author: string;
}

@Route('Books')
@Tags('Books')
export class BookController extends Controller {
  @Get()
  public async getBooks(
  ): Promise<Books[]> {
    const misLibros: Books[] = [
      {
        id: 123,
        name: 'John Doe adventures',
        author: 'John Doe'
      },
      {
        id: 232,
        name: 'John Doe adventures 2',
        author: 'John Doe'
      },
      {
        id: 2321,
        name: 'John Doe adventures 3 Now its personal',
        author: 'John Doe'
      },
    ];

    return misLibros;
  }
}