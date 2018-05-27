import {
  Component,
  DoCheck,
  Input,
  IterableDiffer,
  IterableDiffers,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { INgxForm } from '@ngx-dynamic-form/core';

@Component({
  selector: 'ngx-form',
  templateUrl: './ngx-form.component.html',
  styleUrls: ['./ngx-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NgxFormComponent implements OnInit, DoCheck {
  private _formModel: INgxForm;
  private _differ: IterableDiffer<INgxForm>;

  @Input()
  set formModel(value: INgxForm) {
    this._formModel = value;
    if (value) {
      this.initSubModels();
      this.setIsEditMode();
    }
  }

  get formModel(): INgxForm {
    return this._formModel;
  }

  @Input()
  set formData(value: any) {
    this.formModel.formData = value;
    if (this.formModel.formGroup) {
      this.formModel.formGroup.reset(value);
    }
  }

  get formData(): any {
    return this.formModel.formData;
  }

  get formGroup(): FormGroup {
    return this.formModel ? this.formModel.formGroup : null;
  }

  get subModels(): INgxForm[] {
    return this.formModel ? this.formModel.subModels : null;
  }

  constructor(
    private formBuilder: FormBuilder,
    private iterableDiffers: IterableDiffers
  ) {}

  ngOnInit() {
    this._differ = this.iterableDiffers.find(this.formModel.subModels).create();

    if (this.formModel.debug) {
      console.log('FormData @NgxFormComponent', this.formData);
      console.log('FormModel @NgxFormComponent', this.formModel);
    }
  }

  ngDoCheck() {
    const changes = this._differ.diff(this.formModel.subModels);
    const formArray = this.formGroup.get(this.formModel.name) as FormArray;

    if (changes && formArray) {
      changes.forEachAddedItem(change =>
        this.onSubModelAdded(formArray, change.item.formGroup)
      );
      changes.forEachRemovedItem(change =>
        this.onSubModelRemoved(formArray, change.item.formGroup)
      );
    }
  }

  initSubModels() {
    if (this.subModels.length) {
      const formArray = this.formBuilder.array(
        this.subModels.map(item => item.formGroup)
      );
      this.formGroup.addControl(this.formModel.name, formArray);
    }
  }

  onSubModelAdded(formArray, formGroup) {
    if (!formArray.controls.includes(formGroup)) {
      formArray.push(formGroup);
    }
  }

  onSubModelRemoved(formArray, formGroup) {
    formArray.controls.forEach((ctrl, index) => {
      if (ctrl === formGroup) {
        formArray.removeAt(index);
      }
    });
  }

  setIsEditMode() {
    if (this.formModel) {
      if (this.formData) {
        if (this.formData.id) {
          this.formModel.isEditMode = true;
        } else {
          this.formModel.isEditMode = false;
        }
      } else {
        this.formModel.isEditMode = false;
      }
    }
  }
}
