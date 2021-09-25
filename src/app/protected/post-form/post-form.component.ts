import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public: boolean = false
  form: FormGroup;


  @Output() postEvent = new EventEmitter<Object>();

  ngOnInit(): void {

    this.form = this.fb.group({
      content: ['', [
        Validators.required,
        Validators.maxLength(281),
        Validators.minLength(1)
      ]]})
  }

  get content(){
    return this.form.get('content');
  }


  sendPost(){ 
      this.postEvent.emit({content: this.form.get("content").value, public: this.public});
      // console.log({content: this.form.get("content").value, public: this.public});
      this.clearForm()
    
  };

  clearForm(){
    this.form.reset();
    this.form.get('content').clearValidators();
    this.form.get('content').updateValueAndValidity();
  }




}
