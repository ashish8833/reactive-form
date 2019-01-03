import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  FormArray,
  FormBuilder,
  FormControl
} from "@angular/forms";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.userForm = this.fb.group({
      fullName: new FormControl("", { validators: [Validators.required] }),
      email: new FormControl("", {
        validators: [
          Validators.required,
          Validators.pattern(environment.mobileValidator)
        ]
      })
    });
  }
  submit(userForm) {
    console.log(userForm);
    console.log(this.userForm.getRawValue());
  }
}
