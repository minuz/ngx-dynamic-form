import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { INgxForm } from './models/interfaces/ngx-form.interface';

export type AnyPredicate = (form: INgxForm, control: AbstractControl, formValue: any) => any;
export type BooleanPredicate = (form: INgxForm, control: AbstractControl, formValue: any) => boolean;
export type DataPredicate = (value: any) => Observable<any>;
