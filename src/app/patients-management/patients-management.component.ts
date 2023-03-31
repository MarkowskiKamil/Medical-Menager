import { Component, AfterViewInit, ViewChild, OnInit, DoCheck } from '@angular/core';
import { Patient } from '../data/definitions';
import { Router } from '@angular/router';
import { patient } from '../data/patients';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-patients-management',
  templateUrl: './patients-management.component.html',
  styleUrls: ['./patients-management.component.css'],
})
export class PatientsManagementComponent implements AfterViewInit, OnInit, DoCheck {
  public displayedColumns: string[] = [
    'name',
    'surname',
    'pesel',
    'city',
    'postalCode',
    'street',
    'homeNumber',
  ];

  public patients: Array<Patient> = patient;
  public dataSource = new MatTableDataSource(patient);



  constructor(private _router: Router, private _liveAnnouncer: LiveAnnouncer) {}
  ngOnInit(): void {};
  ngDoCheck(): void {};

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
  public add(form: any) {
    console.log(form)
    
      if (this.patients.includes(form.value.pesel)) {
        console.log("Pacjent o podanym numerze pesel już istnieje")
      }
    else {
      const newPatient: Patient = {
        ...form.value
        };
      this.dataSource.data = [
      ...this.dataSource.data,
      newPatient
  ];
  this.patients.push(form.value)}
      
    }
   
  }

