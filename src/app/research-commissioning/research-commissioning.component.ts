import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Research, Patient, Project } from '../data/definitions';
import { research } from '../data/research';
import { patient } from '../data/patients';
import { project } from '../data/projects';

@Component({
  selector: 'app-research-commissioning',
  templateUrl: './research-commissioning.component.html',
  styleUrls: ['./research-commissioning.component.css']
})
export class ResearchCommissioningComponent implements OnInit {
  public researchTypeOptions = ['psychotesty', 'badania moczu', 'badania krwi', 'badania kału'];
  public patient: Array<Patient> = patient;
  public patientsOptions: Array<Patient> = patient;
  public project: Array<Project> = project;
  public research: Array<Research> = research;
  public researchData: Research = research[research.length];
  public id = '';
  public type = '';
  public status = '';
  public result = '';
  public patientInResearch = '';
  public projectOfResearch = '';
  
  
 
  constructor(private _router: Router) { }

  public goToSummary() {
    this._router.navigate(['/summary'])
  }
  public goToPatientsManagement() {
    this._router.navigate(['/patients-management'])
  }
  public goToProjectsManagement() {
    this._router.navigate(['/projects-management'])
  }
  public goToResearchCommisioning() {
    this._router.navigate(['/research-commisioning'])
  }
  public goToResearchResults() {
    this._router.navigate(['/research-results'])
  }

  ngOnInit(): void {
  }
  public add(form: any) {
    const newResearch = ({
      ...form.value
    });
   
  this.research.push(form.value)
  }
}
