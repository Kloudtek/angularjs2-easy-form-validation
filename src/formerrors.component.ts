import {Component, Input} from "@angular/core";
import {XFormGroup} from "./xformgroup";

@Component({
  selector: 'form-errors',
  template: `<div *ngIf="form.errMsgs.length > 0" class="alert alert-danger">
  <div *ngFor="let e of form.errMsgs">
    {{ e }}
  </div>
</div>
`
})
export class FormErrors {
  @Input()
  form: XFormGroup;
}
