import { Component, OnInit } from '@angular/core';
import { HologramsService } from '../../../services/holograms/holograms.service';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projectsNames: string[];
  sourcesNames: string[];
  categories;
  commonTech;
  technologies;
  selectedCategory = "SPA Massage";
  holograms;

  constructor(
    public hologramsService: HologramsService,
    private projectsService: ProjectsService,
    ) {
  }

  ngOnInit() {
    this.projectsNames = this.projectsService.MasterProjectsNames;
    this.sourcesNames = this.hologramsService.Sources;
    this.hologramsService.get().subscribe(holograms => {
      this.holograms = holograms;
    })

    this.categories = [
      { name: "SPA Massage", imageFile: "massage_stones.png" },
      { name: "Treatments", imageFile: "biofeedback.png" },
      { name: "Knowledge", imageFile: "knowledge.png" },
      { name: "Zuberec", imageFile: "zuberec.jpg" },
    ]
    

    this.commonTech = { name: "Holopedia", imageFile: "holopedia_all.png", youtubeLink: "UCVH4K61XQN70kCvRSdbW1bQ" },
    this.technologies = [
      { name: "Holopedia 3D LED fans", imageFile: "holopedia_3D_LED_fans.png", youtubeLink: "UCb-4yG4ukOfB44br9F9U5mw" },
      { name: "Holopedia VR", imageFile: "holopedia_vr.png", youtubeLink: "UC5mRbkIiW8hkMGccSQh4HKQ" },
      { name: "Holopedia Pyramid", imageFile: "holopedia_pyramid.png", youtubeLink: "UC8JZ43d_HHEYOtdwIDTh1mw" },
      { name: "Holopedia Looking Glass", imageFile: "holopedia_looking_glass.png", youtubeLink: "UChiKIf1CbXjaNowu3sXuSFQ" },
      { name: "Holopedia HoloTube", imageFile: "holopedia_holotube.png", youtubeLink: "UCdgH0vobd_5ZoyuuyrFqQyQ" },
      { name: "Holopedia HoloVocaloid", imageFile: "holopedia_holovocaloid.png", youtubeLink: "UCBa6Ne4Cq98N8lNhmbyDpZQ" },
    ]
  }

}
