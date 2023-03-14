import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects-management',
  templateUrl: './projects-management.component.html',
  styleUrls: ['./projects-management.component.css']
})
export class ProjectsManagementComponent implements OnInit {

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
