import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount',
  standalone: true,
})
export class CalcDiscountPipe implements PipeTransform {
  transform(value: number, discountValue: number = 20): number {

    // value = 200 //discountValue=50
    let div = discountValue / 100;//.5
    let mulValue = value * div;//200 * .5 = 100
    let result = value - mulValue;//200 - 100 = 100
    return result;
  }
}
