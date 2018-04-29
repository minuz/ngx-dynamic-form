import { merge } from 'lodash';

import { INgxTextarea } from './../interfaces/ngx-textarea.interface';
import { NgxFormElement } from './ngx-form-element';

export class NgxTextarea extends NgxFormElement implements INgxTextarea {
    cols?: number;
    rows?: number;

    constructor(opt?: INgxTextarea) {
        super();
        merge(this, opt);
    }
}