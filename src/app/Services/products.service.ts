import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsList: Iproduct[];

  constructor() {
    this.productsList = [
      {
        id: 1,
        name: 'Odense 8-Seater Top Dining Table',
        price: 21500,
        quantity: 0,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Engineered Wood',
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quis, dicta obcaecati suscipit error fuga commodi sunt consequuntur illum praesentium rem dolorum tempora quas eum maiores ad enim doloribus dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maiores quas iste placeat repellendus vitae tempora laboriosam non quos, sunt, praesentium ex voluptas reiciendis dignissimos soluta magnam accusantium debitis quibusdam!',
      },
      {
        id: 5,
        name: 'Trixia 4-Seater Glass Top Dining Table',
        price: 30000,
        quantity: 8,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quis, dicta obcaecati suscipit error fuga commodi sunt consequuntur illum praesentium rem dolorum tempora quas eum maiores ad enim doloribus dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maiores quas iste placeat repellendus vitae tempora laboriosam non quos, sunt, praesentium ex voluptas reiciendis dignissimos soluta magnam accusantium debitis quibusdam!',
      },
      {
        id: 25,
        name: 'Gasha Marble Top Side Table',
        price: 14000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quis, dicta obcaecati suscipit error fuga commodi sunt consequuntur illum praesentium rem dolorum tempora quas eum maiores ad enim doloribus dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maiores quas iste placeat repellendus vitae tempora laboriosam non quos, sunt, praesentium ex voluptas reiciendis dignissimos soluta magnam accusantium debitis quibusdam!',
      },
      {
        id: 7,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 2,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quis, dicta obcaecati suscipit error fuga commodi sunt consequuntur illum praesentium rem dolorum tempora quas eum maiores ad enim doloribus dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maiores quas iste placeat repellendus vitae tempora laboriosam non quos, sunt, praesentium ex voluptas reiciendis dignissimos soluta magnam accusantium debitis quibusdam!',
      },
      {
        id: 17,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 2,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quis, dicta obcaecati suscipit error fuga commodi sunt consequuntur illum praesentium rem dolorum tempora quas eum maiores ad enim doloribus dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maiores quas iste placeat repellendus vitae tempora laboriosam non quos, sunt, praesentium ex voluptas reiciendis dignissimos soluta magnam accusantium debitis quibusdam!',
      },
      {
        id: 9,
        name: 'Boston Study Chair',
        price: 1000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quis, dicta obcaecati suscipit error fuga commodi sunt consequuntur illum praesentium rem dolorum tempora quas eum maiores ad enim doloribus dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maiores quas iste placeat repellendus vitae tempora laboriosam non quos, sunt, praesentium ex voluptas reiciendis dignissimos soluta magnam accusantium debitis quibusdam!',
      },
      {
        id: 10,
        name: 'Coby Extendable TV Unit',
        price: 13000,
        quantity: 0,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'Wood',
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quis, dicta obcaecati suscipit error fuga commodi sunt consequuntur illum praesentium rem dolorum tempora quas eum maiores ad enim doloribus dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maiores quas iste placeat repellendus vitae tempora laboriosam non quos, sunt, praesentium ex voluptas reiciendis dignissimos soluta magnam accusantium debitis quibusdam!',
      },
      {
        id: 15,
        name: 'Accent TV Unit',
        price: 36999,
        quantity: 4,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'MDF',
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quis, dicta obcaecati suscipit error fuga commodi sunt consequuntur illum praesentium rem dolorum tempora quas eum maiores ad enim doloribus dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maiores quas iste placeat repellendus vitae tempora laboriosam non quos, sunt, praesentium ex voluptas reiciendis dignissimos soluta magnam accusantium debitis quibusdam!',
      },
      {
        id: 55,
        name: 'Plymouth TV Unit',
        price: 36999,
        quantity: 3,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'wood',
        details:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quis, dicta obcaecati suscipit error fuga commodi sunt consequuntur illum praesentium rem dolorum tempora quas eum maiores ad enim doloribus dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maiores quas iste placeat repellendus vitae tempora laboriosam non quos, sunt, praesentium ex voluptas reiciendis dignissimos soluta magnam accusantium debitis quibusdam!',
      },
    ];
  }

  getAllProducts(): Iproduct[] {
    return this.productsList;
  }
  performFilter(filterValue: string): Iproduct[] {
    filterValue = filterValue.toLowerCase();
    return this.productsList.filter((prd: Iproduct) =>
      prd.name.toLowerCase().includes(filterValue)
    );
  }

  getPrdByID(Prdid: number): Iproduct | undefined {
    return this.productsList.find((prd) => prd.id == Prdid);
  }
}
