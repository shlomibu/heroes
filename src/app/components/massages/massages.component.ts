import { Component, OnInit } from '@angular/core';
import { MassageService } from 'src/app/services/massage.service';

@Component({
  selector: 'app-massages',
  templateUrl: './massages.component.html',
  styleUrls: ['./massages.component.css']
})
export class MassagesComponent implements OnInit {

  constructor(public massageService: MassageService) {
  }

  ngOnInit(): void {
    this.massageService.massages;
  }

}
