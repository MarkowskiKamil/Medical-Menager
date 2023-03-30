import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { Project, Research, Patient } from '../data/definitions';
import { project } from '../data/projects';
import { research } from '../data/research';
import { patient } from '../data/patients';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-projects-management',
  templateUrl: './projects-management.component.html',
  styleUrls: ['./projects-management.component.css'],
})
export class ProjectsManagementComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['id', 'name', 'research'];
  public project: Array<Project> = project;
  //public research: Array<Research> = research;
  //public patient: Array<Patient> = patient;
  public dataSource = new MatTableDataSource(project);

  constructor(private _router: Router, private _liveAnnouncer: LiveAnnouncer) {}
  ngOnInit(): void {}

  public goToSummary() {
    this._router.navigate(['/summary']);
  }
  public goToPatientsManagement() {
    this._router.navigate(['/patients-management']);
  }
  public goToProjectsManagement() {
    this._router.navigate(['/projects-management']);
  }
  public goToResearchCommisioning() {
    this._router.navigate(['/research-commisioning']);
  }
  public goToResearchResults() {
    this._router.navigate(['/research-results']);
  }

  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  // dodawanie zrobić z pomocą 2-way data binding ??
  public addNewProject(form: any) {
    console.log(form);
    const newProject: Project = {
      ...form.value
    }
    if (this.project.includes(form.value.name)) {
      console.log("Projekt o pdoanej nazwie już istnieje")
  }
else {
  this.dataSource.data = [
    ...this.dataSource.data,
    newProject
];
this.project.push(form.value)

}}
}
