import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { Client } from '../_models/client';

@Component({
  selector: 'app-lisa-isik-pop-up',
  templateUrl: './lisa-isik-pop-up.component.html',
  styleUrls: ['./lisa-isik-pop-up.component.scss']
})
export class LisaIsikPopUpComponent implements OnInit {

  form: FormGroup;
  firstname: string;
  numberPatter: '/^[0-9]*$/';
  isCompany: boolean;
  id: string;

  reqMessage: string;

  constructor(
    private dialogRef: MatDialogRef<LisaIsikPopUpComponent>,
    private fb: FormBuilder,
  ) {
    this.isCompany = false;
  }

  ngOnInit() {
    console.log("___________");
    console.log("IsCompany: "+this.isCompany);
    

    if (this.isCompany) {
      this.form = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        idcode: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('^[0-9]*$')]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        company: [''],
        companyData: this.fb.group({
          companyName: ['', Validators.required],
          companyCode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
          companyEmail: [''],
        })
      });

    } else {
      this.form = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        idcode: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('^[0-9]*$')]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        company: [''],
      });
    }
  }

  get idcode() { return this.form.get('idcode'); }
  get email() { return this.form.get('email'); }
  get phone() { return this.form.get('phone'); }
  get companyCode() { return this.form.get('companyData.companyCode'); }

  close() {
    this.dialogRef.close();
  }
  addCompanyForm() {
    this.isCompany = !this.isCompany;
    this.ngOnInit();


  }

  saveFormData() {
    // if (this.form.dirty && this.form.valid) {
    //   this.id = "10";
    //   const client = new Client(
    //     this.id, 
    //     this.form.value.firstname,
    //     this.form.value.lastname,
    //     this.form.value.idCode,
    //     this.form.value.phone,
        
    //   );




    //   console.log(
    //     `
    //     Name: ${this.form.value.firstname}
    //     Email: ${this.form.value.email}
    //     Email: ${this.form.value.email}
    //     `);

    // }
  }
}
