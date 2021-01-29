import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Observable, Subscription, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MessageService } from 'src/app/messages/message.service';
import { OimService } from '../oim.service';
import { Workviewuser, WorkviewuserResolved } from '../workviewuser';
import { GenericValidator } from '../../shared/GenericValidator';
@Component({
  selector: 'pm-oim-edit',
  templateUrl: './oim-edit.component.html',
  styleUrls: ['./oim-edit.component.css']
})
export class OimEditComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  allowedDomain: any = ['ACE', 'CHUBB']
  allowedOperatingSystem: any = ['Windows-7', 'Windows-10']
  YesorNo: any = ['Yes', 'No']
  pageTitle = 'OIM Edit';
  chooseOS = "Choose your operating System";
  chooseCitrix = "Choose Yes if Citrix; No for Desktop/laptop";
  chooseDomain = "Choose your domain";
  errorMessage: string;
  oimForm: FormGroup;

  wvuser: Workviewuser;
  private sub: Subscription;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;


  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private oimservice: OimService) {
    this.validationMessages = {
      productName: {
        required: 'Product name is required.',
        minlength: 'Product name must be at least three characters.',
        maxlength: 'Product name cannot exceed 50 characters.'
      },
      productCode: {
        required: 'Product code is required.'
      },
      starRating: {
        range: 'Rate the product between 1 (lowest) and 5 (highest).'
      }
    };
    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);

  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      loginId: new FormControl(),
      supervisorId: new FormControl(),
      modelId: new FormControl(),
      computerName: new FormControl(),
      DomainName: new FormControl(),
      status: new FormControl(),
      requestId: new FormControl(),
      operatingSystem: new FormControl(),
      id: new FormControl(),
      citrixAccess: new FormControl(),
      BusinessGroup: new FormControl(),
      Justification: new FormControl()
    });
  }

  ngOnInit(): void {
    this.oimForm = this.createFormGroup();
    this.oimForm = this.fb.group({
      loginId: ['', [Validators.required, Validators.minLength(4)]],
      supervisorId: ['', [Validators.required, Validators.minLength(4)]],
      modelId: ['', [Validators.required, Validators.minLength(4)]],
      DomainName: ['', [Validators.required]],
      operatingSystem: [''],
      citrixAccess: [''],
      Department: ['', [Validators.required]],
      BusinessGroup: ['', [Validators.required]],
      Justification: ['', [Validators.required]]
    });
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = + params.get('id');
        this.getProduct(id);
      }
    )
  }
  getProduct(id: number): void {
    this.oimservice.getUser(id)
      .subscribe({
        next: (product: Workviewuser) => this.displayProduct(product),
        error: err => this.errorMessage = err
      });
  }
  displayProduct(product: Workviewuser): void {
    if (this.oimForm) {
      this.oimForm.reset();
    }
    this.wvuser = product;
    // Update the data on the form
    this.oimForm.patchValue({
      loginId: this.wvuser.loginId,
      modelId: this.wvuser.modelId,
      DomainName: this.wvuser.id != 0 ? this.wvuser.DomainName : this.chooseDomain,
      supervisorId: this.wvuser.supervisorId,
      computerName: this.wvuser.computerName,
      status: this.wvuser.status,
      requestId: this.wvuser.requestId,
      operatingSystem: this.wvuser.id != 0 ? this.wvuser.operatingSystem : this.chooseOS,
      citrixAccess: this.wvuser.id != 0 ? this.wvuser.citrixAccess : this.chooseCitrix,
      Department: this.wvuser.Department,
      BusinessGroup: this.wvuser.BusinessGroup,
      Justification: this.wvuser.Justification,
      id: this.wvuser.id,
    });
    if (this.wvuser.id === 0) {
      this.pageTitle = 'Add User in OIM';

    } else {
      this.pageTitle = `Edit User in OIM: ${this.wvuser.loginId}`;
    }
  }
  saveUser(): void {
    if (this.oimForm.valid) {
      if (this.oimForm.dirty) {
        const p = { ...this.wvuser, ...this.oimForm.value };

        if (p.id === 0) {
          this.oimservice.createProduct(p)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        } else {
          this.oimservice.updateProduct(p)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }
  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.oimForm.reset();
    this.router.navigate(['/oim']);
  }
  deleteUser(): void {

  }
  get DomainName() {
    console.log(this.oimForm.get('DomainName'));
    return this.oimForm.get('DomainName');
  }

  changeDomain(e) {
    console.log("value: " + e.target.value);
    this.DomainName.setValue(e.target.value, {
      onlySelf: true
    });
  }
  get operatingSystem() {
    console.log(this.oimForm.get('operatingSystem'));
    return this.oimForm.get('operatingSystem');
  }
  changeoperatingSystem(e) {
    console.log("value: " + e.target.value);
    this.operatingSystem.setValue(e.target.value, { onlySelf: true }
    );
  }

  get citrixAccess() {
    console.log(this.oimForm.get('citrixAccess'));
    return this.oimForm.get('citrixAccess');
  }

  changecitrixAccess(e) {
    console.log("value: " + e.target.value);
    this.citrixAccess.setValue(e.target.value, { onlySelf: true }
    );
  }
  // check the entered lan seems valid or not.. if it's an issue give appropriate error
  ValidateLanCode(e) {

    if (e.target.value == 'mano') {

      console.log('My value seems good');
      //give a call to http client and check if it's valid or not..

    }
    console.log("Lan id:" + e.target.value);
  }
  ValidateSupervisorId(e) {
    console.log('supervisor ID ' + e.target.value);
  }
  ValidateModelId(e) {
    console.log('Model ID ' + e.target.value);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
