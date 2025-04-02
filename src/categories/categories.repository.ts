import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesRepository {
  private categories: [] = [];

  getAll() {
    return this.categories;
  }
}
