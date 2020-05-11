import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../_services/file-upload.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dokumendid',
  templateUrl: './dokumendid.component.html',
  styleUrls: ['./dokumendid.component.scss']
})
export class DokumendidComponent implements OnInit {

  constructor(private fileUploadService: FileUploadService) { 
    
  }



  fileToUpload: File = null;


  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }

}
