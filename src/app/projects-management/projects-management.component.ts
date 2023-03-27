import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../data/definitions';
import { project } from '../data/projects';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-projects-management',
  templateUrl: './projects-management.component.html',
  styleUrls: ['./projects-management.component.css'],
})
export class ProjectsManagementComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['id', 'name', 'patients', 'research'];
  public project: Array<Project> = project;
  public dataSource = new MatTableDataSource(project);
  public id = '';
  public name = '';
  public patients = [];
  public research = [];

  submit = new EventEmitter<Project>();

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
  public addNewProject(form: any) {
    const newProject: Project = {
      ...form.value
    }
    /*this.dataSource.data = [
      ...this.dataSource.data,
      newProject
  ];*/
  this.project.push(form.value)
  }
}
 