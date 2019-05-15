import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-frontend-layout',
  templateUrl: './frontend-layout.component.html',
  styleUrls: ['./frontend-layout.component.scss']
})
export class FrontendLayoutComponent implements OnInit {

  constructor(private titleService:Title) { }

  ngOnInit() {
  }

}
