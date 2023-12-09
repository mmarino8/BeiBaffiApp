import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.page.html',
  styleUrls: ['./adopcion.page.scss'],
})
export class AdopcionPage implements OnInit {

  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
