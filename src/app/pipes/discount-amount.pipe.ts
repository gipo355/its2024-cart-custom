import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountAmount',
})
export class DiscountAmountPipe implements PipeTransform {
  // DI: use currency pipe in the code, request in constructor
  constructor(private currencyPipe: CurrencyPipe) {}

  transform(value: number): string {
    // use currency pipe in the code with DI
    const tmp = this.currencyPipe.transform(value); // transform the value here

    return value ? `(-${tmp})` : '';
  }
}
