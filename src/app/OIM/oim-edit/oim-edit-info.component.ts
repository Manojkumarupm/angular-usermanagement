import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OimService } from '../oim.service';
import { Workviewuser } from '../workviewuser';

@Component({
  selector: 'pm-oim-edit-info',
  templateUrl: './oim-edit-info.component.html',
  styleUrls: ['./oim-edit-info.component.css']
})
export class OimEditInfoComponent implements OnInit {
 
  constructor(private route: ActivatedRoute,private fb: FormBuilder)
  {
    
   }
  
  ngOnInit(): void{
   
  }
  
}
