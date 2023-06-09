import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Food{
    return this.getAll().find(food => food.id==id)!;
  }
  getAll():Food[] {
    return [
      {
        id: 1,
        name: 'BaiganBharta',
        cookTime: '60',
        price: 100,
        favorite: false,
        origins: ['Indian'],
        stars: 4.5,
        imageUrl: '/assets/images/BaiganBharta.jpeg',
        tags: ['Food', 'Vegtables', 'Dinner'],
      },
      {
        id: 2,
        name: 'Dal Tadka',
        price: 80,
        cookTime: '20-30',
        favorite: true,
        origins: ['Indian'],
        stars: 4.7,
        imageUrl: '/assets/images/DalTadka.jpeg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'MatarPaneer',
        price: 120,
        cookTime: '30',
        favorite: false,
        origins: ['Indian'],
        stars: 4.5,
        imageUrl: '/assets/images/MatarPaneer.jpeg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Mix Veg',
        price: 90,
        cookTime: '30',
        favorite: true,
        origins: ['Indian'],
        stars: 4.3,
        imageUrl: '/assets/images/MixVeg.jpeg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Okra Masala',
        price: 80,
        cookTime: '40-50',
        favorite: false,
        origins: ['Indian'],
        stars: 3.0,
        imageUrl: '/assets/images/OkraMasala.jpeg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Paneer Tikka',
        price: 200,
        cookTime: '40-50',
        favorite: true,
        origins: ['Indian'],
        stars: 4.0,
        imageUrl: '/assets/images/Paneer Tikka.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Rajma',
        cookTime: '10-20',
        price: 100,
        favorite: false,
        origins: ['Indian'],
        stars: 4.5,
        imageUrl: '/assets/images/Rajma.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 8,
        name: 'Chowmin',
        price: 50,
        cookTime: '30',
        favorite: true,
        origins: ['Indian'],
        stars: 4.3,
        imageUrl: '/assets/images/Chowmin.jpeg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 9,
        name: 'Hakka Noodles',
        price: 80,
        cookTime: '40-50',
        favorite: true,
        origins: ['Indian'],
        stars: 3.0,
        imageUrl: '/assets/images/HakkaNoodles.jpeg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 10,
        name: 'Vada Pavv',
        price: 60,
        cookTime: '40-50',
        favorite: false,
        origins: ['Indian'],
        stars: 4.0,
        imageUrl: '/assets/images/vadapav.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 11,
        name: 'Veg Biryani',
        cookTime: '10-20',
        price: 100,
        favorite: true,
        origins: ['Indian'],
        stars: 4.5,
        imageUrl: '/assets/images/VegBiryani.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 12,
        name: 'Capsicum Pizza',
        price: 120,
        cookTime: '30',
        favorite: false,
        origins: ['Indian'],
        stars: 4.5,
        imageUrl: '/assets/images/capsicum.jpeg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 13,
        name: 'Manchurian',
        price: 90,
        cookTime: '30',
        favorite: true,
        origins: ['Indian'],
        stars: 4.3,
        imageUrl: '/assets/images/Manchurian.jpeg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 14,
        name: 'Corn Pizza',
        price: 120,
        cookTime: '40-50',
        favorite: true,
        origins: ['Indian'],
        stars: 3.0,
        imageUrl: '/assets/images/CornPizza.jpeg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 15,
        name: 'Paneer Capsicum Tomato Pizza',
        price: 200,
        cookTime: '40-50',
        favorite: true,
        origins: ['Indian'],
        stars: 4.0,
        imageUrl: '/assets/images/PaneerCapsicumTomato.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 16,
        name: 'Veg Sandwich',
        cookTime: '10-20',
        price: 39,
        favorite: false,
        origins: ['Indian'],
        stars: 4.5,
        imageUrl: '/assets/images/VegSandwich.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 17,
        name: 'Corn Sandwich',
        price: 50,
        cookTime: '30',
        favorite: true,
        origins: ['Indian'],
        stars: 4.3,
        imageUrl: '/assets/images/cornsandwich.jpeg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 18,
        name: 'Paneer Sandwich',
        price: 80,
        cookTime: '40-50',
        favorite: true,
        origins: ['Indian'],
        stars: 3.0,
        imageUrl: '/assets/images/PaneerSandwich.jpeg',
        tags: ['SlowFood', 'Soup'],
      },



  ]
  }
}
