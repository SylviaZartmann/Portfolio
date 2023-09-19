import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  FormData = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  isSubmitted = false;

  constructor(private fb: FormBuilder ) {}


  onSubmit() {
    this.isSubmitted = true;
    if (
      this.FormData.controls.name.valid &&
      this.FormData.controls.email.valid &&
      this.FormData.controls.message.valid
    ) {
      this.sendMail();
      this.FormData.reset();
      this.isSubmitted = false;
    }
  }

  async sendMail() {
      await fetch(
        'https://sylvia-zartmann.developerakademie.net/send_mail/send_mail.php',
        {
          method: 'POST',
          body: JSON.stringify(this.FormData.value),
        }
      );
  }

  validateInput(whichInput: string) {
    this.FormData.get(whichInput)?.invalid &&
      (this.FormData.get(whichInput)?.dirty ||
        this.FormData.get(whichInput)?.touched ||
        this.isSubmitted);
  }
  validateErrorText(whichInput: string) {
    return (
      this.FormData.get(whichInput)?.hasError('required') &&
      (this.FormData.get(whichInput)?.dirty || this.isSubmitted)
    );
  }


}
