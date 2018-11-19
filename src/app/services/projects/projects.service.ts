import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private masterProjects: string[] = [
    'Medicine',
    'Artificial Intelligence',
    'Applications',
    'Algorithms',
    'Smart',
    'Sustainability',
    'Systems',
    'Simulations',
    'Technology',
    'Therapies',
    'Tunnels',
    'Tomography',
    'Education',
    'Emulation',
    'Research'
  ];

  public get MasterProjects(): Project[] {
    return this.masterProjects.map<Project>((value, _index, _array) => { return new Project(value); });
  }

  public get MasterProjectsNames(): string[] {
    return this.masterProjects;
  }

  constructor() { }
}
