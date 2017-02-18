import {FormBuilder} from "@angular/forms";
import {OnInit} from "@angular/core";
import {Field} from "./field";
import {XFormGroup, createReactiveForm} from "./xformgroup";

export abstract class ValidatingForm implements OnInit {
  form: XFormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = createReactiveForm(this.fb,this.getFields());
  }

  abstract getFields() : Field[];
}
