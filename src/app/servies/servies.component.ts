import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  emailjs  from '@emailjs/browser';
@Component({
  selector: 'app-servies',
  templateUrl: './servies.component.html',
  styleUrls: ['./servies.component.css']
})
export class ServiesComponent {

  form : FormGroup = this.fb.group({
    from_name: ['',[Validators.required,Validators.minLength(4)]],
    to_name: ['Santosh'],
    from_email:['',[Validators.required,Validators.email]],
    subject:['Consultancy Query'],
    message:['',Validators.required],
    mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
  });

  constructor(private fb:FormBuilder){}

  async sendmail(){
    if(this.form.valid){
    emailjs.init('TfmWgY5QmacQYRIJK');
    alert('Your message has been stored...');
    let response = await emailjs.send("service_e65uytw","template_rta7lu4",{
      from_mail: this.form.value.from_email,
      message: this.form.value.message,
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      subject : this.form.value.subject,
      mobile: this.form.value.mobile
      });
    this.form.reset();
    }
    else{
      alert("please Enter the feilds Correctly");
      this.form.reset();
    }
  }
}