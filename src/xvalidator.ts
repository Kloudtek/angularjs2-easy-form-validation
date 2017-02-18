import {
  Validator, RequiredValidator, MinLengthValidator, AbstractControl,
  FormControl
} from "@angular/forms";
import {capitalizeFirstLetter} from "./utils";

/**
 * Extended validator interface that includes default error messages
 */
export interface XValidator {
  getId(): string;
  validate(c: FormControl);
  getErrMsg(field: string): string
}

export class XRequiredValidator implements XValidator {
  getId(): string {
    return "required";
  }

  validate(c: AbstractControl): {[p: string]: any} {
    return c.value.length > 0 ? null : {
        required: {
          valid: false
        }
      };
  }

  getErrMsg(field: string): string {
    return capitalizeFirstLetter(field) + " is required.";
  }
}

export class XMinLengthValidator implements XValidator {
  constructor(private minLen: number) {
  }


  getId(): string {
    return "minlength";
  }

  validate(c: AbstractControl): {[p: string]: any} {
    return c.value.length >= this.minLen ? null : {
        minlength: {
          valid: false
        }
      };
  }

  getErrMsg(field: string): string {
    return capitalizeFirstLetter(field) + " must be at least " + this.minLen + " characters long.";
  }
}

export class XMaxLengthValidator implements XValidator {
  constructor(private maxLen: number) {
  }

  getId(): string {
    return "maxlength";
  }

  validate(c: AbstractControl): {[p: string]: any} {
    return c.value.length <= this.maxLen ? null : {
        maxlength: {
          valid: false
        }
      };
  }

  getErrMsg(field: string): string {
    return capitalizeFirstLetter(field) + " cannot be more than " + this.maxLen + " characters long.";
  }
}
