import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
<<<<<<< HEAD
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
=======
import { FormGroup, FormBuilder, FormControl, Validators, MinLengthValidator } from '@angular/forms';
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
import { Client } from '../_models/client';
import { ClientsService } from '../_services/clients.service';

@Component({
  selector: 'app-lisa-isik-pop-up',
  templateUrl: './lisa-isik-pop-up.component.html',
  styleUrls: ['./lisa-isik-pop-up.component.scss']
})
export class LisaIsikPopUpComponent implements OnInit {

  form: FormGroup;
  numberPatter: '/^[0-9]*$/';
  isCompany: boolean;
  id: string;
  editData: Client;

  reqMessage: string;
  editMode: boolean;

  constructor(
    private dialogRef: MatDialogRef<LisaIsikPopUpComponent>,
    private fb: FormBuilder,
    private clientService: ClientsService,
    @Inject(MAT_DIALOG_DATA) data,
  ) {
    if (data) {
      this.editData = data;
      this.editMode = true;

      console.log(this.editData._id);

    }
    this.editMode = false;
    this.isCompany = false;
  }

  ngOnInit() {
    console.log("___________");

    if (this.isCompany) {
      console.log("IsCompany: " + this.isCompany);
      this.form = this.fb.group({
        companyData: this.fb.group({
          companyName: ['', Validators.required],
          companyCode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
          companyEmail: [''],
        }),
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
<<<<<<< HEAD
        idCode: ['', [Validators.required, Validators.maxLength(11), Validators.pattern('^[0-9]*$')]],
=======
        idCode: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('^[0-9]*$')]],
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
        isCompany: [true],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        company: [''],
        address: [''],

      });

    } else if (this.editData) {
      this.form = this.fb.group({
        name: [this.editData.name, Validators.required],
        email: [this.editData.email, [Validators.required, Validators.email]],
<<<<<<< HEAD
        idCode: [this.editData.idCode, [Validators.required, Validators.maxLength(11), Validators.pattern('^[0-9]*$')]],
=======
        idCode: [this.editData.idCode, [Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('^[0-9]*$')]],
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
        isCompany: [false],
        phone: [this.editData.phone, [Validators.required, Validators.pattern('^[0-9]*$')]],
        company: [this.editData.company],
        address: [this.editData.address],
      });
    } else {
      this.form = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
<<<<<<< HEAD
        idCode: ['', [Validators.required, Validators.maxLength(11), Validators.pattern('^[0-9]*$')]],
=======
        idCode: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('^[0-9]*$')]],
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
        isCompany: [true],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        company: [''],
        address: [''],
      });
    }
  }

  get idCode() { return this.form.get('idCode'); }
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
    if (this.form.dirty && this.form.valid) {
      const client = new Client(

        this.form.value.name,
        this.form.value.email,
        this.form.value.idCode,
        this.form.value.phone,
        this.form.value.isCompany,
        this.form.value.address,
        this.form.value.company

      );
      console.log("Client object sent: ");

      console.log(client);

      this.clientService.addClient(client)
        .toPromise()
        .then(
          data => {
            console.log("_____________");
            console.log(data);
          },
          err => {
            throw (err)
          })
    }
    this.dialogRef.close();

  }
  editFormData(clientId) {
    if (this.form.valid) {
      const client = new Client(

        this.form.value.name,
        this.form.value.email,
        this.form.value.idCode,
        this.form.value.phone,
        this.form.value.isCompany,
        this.form.value.address,
        this.form.value.company

      );
      console.log("Client object chanaged: ");

      console.log(client);

      this.clientService.changeClient(clientId, client)
        .toPromise()
        .then(
          data => {
            console.log("_____________");
            console.log(data);
          },
          err => {
            throw (err)
          })
    }
    this.dialogRef.close();

  }
}
