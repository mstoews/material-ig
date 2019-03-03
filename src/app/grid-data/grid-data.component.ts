import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    DefaultSortingStrategy,
    IgxGridComponent,
    ISortingExpression,
    SortingDirection
} from 'igniteui-angular';

import { LOCAL_DATA } from './data';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-data',
    styleUrls: ['./grid-data.component.scss'],
    templateUrl: './grid-data.component.html'
})

export class GridDataComponent {
    @ViewChild('grid1', { read: IgxGridComponent })
    public grid1: IgxGridComponent;
    public data;
    public expr: ISortingExpression[];

    constructor() {
        this.data = LOCAL_DATA;
        this.expr = [
            { dir: SortingDirection.Asc, fieldName: 'ShipCountry', ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() },
            { dir: SortingDirection.Asc, fieldName: 'ShipCity', ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() }
        ];
    }
    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }
    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
    public isDate(value: any) {
        if (value instanceof Date) {
            return true;
        } else {
            return false;
        }
    }
    public calc2017(values: any[]) {
        const startDate = new Date('1/1/2017');
        const endDate = new Date('12/31/2017');
        return values.filter((x) => x.OrderDate >= startDate && x.OrderDate <= endDate).length;
    }
}
