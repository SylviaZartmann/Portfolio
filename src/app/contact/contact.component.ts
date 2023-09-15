import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  myForm: FormGroup;

  
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: '',
      email: '',
      message: '',
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
