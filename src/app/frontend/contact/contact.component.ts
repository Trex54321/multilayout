import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {FormBuilder,FormGroup, Validators}from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup
  submitted:boolean=false
  success:boolean=false


  constructor(private router:ActivatedRoute , private titleService:Title , private formBuilder:FormBuilder) { }

  

  ngOnInit() {
    this.titleService.setTitle(this.router.snapshot.data['title'])
    this.contactForm = this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.requiredTrue,Validators],
      tel:['',Validators.required]
    })
  }
//getter to access form field
get f(){return this.contactForm.controls}

    onSubmit(){
      this.submitted=true;
      if(this.contactForm.invalid){
        return;
      }
      this.success=true;
    }
}
