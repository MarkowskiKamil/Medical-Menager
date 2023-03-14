import { Component, OnInit } from '@angular/core';
import { Patient, Project, Research } from '../data/definitions';
import {Router} from "@angular/router";
import {patient} from "../data/patients";
import {project} from "../data/projects";
import {research} from "../data/research";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  public patientsToDisplay: Array<Patient> = patient;
  public patientsCounter: number = this.patientsToDisplay.length
  public researchToDisplay: Array<Research> = research;
  public researchCounter: number = this.researchToDisplay.length
  public projectsToDisplay: Array<Project> = project;
  public projectsCounter: number = this.projectsToDisplay.length

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

}
