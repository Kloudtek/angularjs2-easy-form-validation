import {FormGroup, FormBuilder} from "@angular/forms";
import {Field} from "./field";

export class XFormGroup extends FormGroup {
  fields: {
    [key: string]: any;
  };
  errMsgs = [];
}

export function createReactiveForm(fb: FormBuilder, fieldsList : Field[]): XFormGroup {
  const p: any = {};
  const fields: any = {};
  for (let field of fieldsList) {
    let vfns = [];
    fields[field.id] = {};
    for (let v of field.validation) {
      vfns.push(v);
      fields[field.id][v.getId()] = v;
    }
    p[field.id] = [field.value, vfns]
  }
  const form: XFormGroup = fb.group(p) as XFormGroup;
  form.fields = fields;
  form.valueChanges.subscribe(data => generateValidationErrors(form, data));
  generateValidationErrors(form,null);
  return form;
}

function generateValidationErrors(form : XFormGroup, data?: any) {
  form.errMsgs = [];
  for (const field of Object.keys(form.controls)) {
    const control = form.get(field);
    if (control && control.dirty && !control.valid) {
      for (const err of Object.keys(control.errors)) {
        form.errMsgs.push(form.fields[field][err].getErrMsg(field));
      }
    }
  }
}
