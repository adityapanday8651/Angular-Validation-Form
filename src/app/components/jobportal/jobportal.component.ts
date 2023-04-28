import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailOrPhoneRequired } from 'src/app/shared/customerror.directive';

@Component({
  selector: 'app-jobportal',
  templateUrl: './jobportal.component.html',
  styleUrls: ['./jobportal.component.css']
})
export class JobportalComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  submitted = false;


  preview: string = '';

  ngOnInit(): void {

  }

  getProgramingLagnuage(index: number) {
    return this.skillsForms.at(index).get('programLanguage');
  }


  jobForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    contacts: this.fb.group({
      contactType: ['-1', [emailOrPhoneRequired()]],
      email: [''],
      phone: [''],
    }),
    skills: this.fb.array([]),
  });

  addASkillFormGroup() {
    this.skillsForms.push(
      this.fb.group({
        programLanguage: ['', [Validators.required]],
        experience: [0],
      })
    );
  }

  saveData() {
    console.log("Submit Data : ", this.jobForm.value);
  }

  // save() {
  //   this.preview = JSON.stringify(this.jobForm.value);
  //   console.log('Preview : ', this.preview);
  // }

  get firstName() {
    return this.jobForm.get("firstName");
  }
  get lastName() {
    return this.jobForm.get("lastName");
  }
  get contactType() {
    return this.jobForm.get("contacts.contactType");
  }

  get skillsForms() {
    return this.jobForm.get('skills') as FormArray;
  }

  // addASkillFormGroup() {
  //   this.skillsForms.push(
  //     this.fb.group({
  //       programLanguage: [''],
  //       experience: [0],
  //     })
  //   );
  // }

  removeSkillFormGroup(index: number) {
    this.skillsForms.removeAt(index);
  }

  sampleSetValues() {
    this.jobForm.setValue({
      firstName: 'naveen',
      lastName: 'Bommidi',
      contacts: {
        contactType: 'email',
        email: 'naveen@test.com',
        phone: '9876543210',
      },
      skills: [],
    });
  }

  samplePatchValues() {
    this.jobForm.patchValue({
      firstName: 'naveen',
      contacts: {
        phone: '8908908901',
      },
    });
  }

}
