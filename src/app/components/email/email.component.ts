import { Component, OnInit } from '@angular/core';
import {BackedService} from '../backed.service';
import {logger} from 'codelyzer/util/logger';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  flagSpinner = false;
  data = {
    to: '',
    subject: '',
    body: ''
  };
  constructor(private email: BackedService, private snak: MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm(){
    console.log('Data', this.data);

    if (this.data.to == '' || this.data.subject == '' || this.data.body == ''){
      this.snak.open('Field can not be empty !!', 'OK');
      return;
    }
    this.flagSpinner = true;
    this.email.sendEmail(this.data).subscribe(
      response => {
        this.flagSpinner = false;
        console.log(response);
        this.snak.open('Email sent successfully !!', 'OK');
    },
    error => {
      this.flagSpinner = false;
      console.log(error);
      this.snak.open('Someting went wrong !!', 'OK');
    }
    );

  }

}
