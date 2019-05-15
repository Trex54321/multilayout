import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private router:ActivatedRoute , private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.router.snapshot.data['title'])
  }

}
