import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HologramsService } from '../../../services/holograms/holograms.service';
import { Hologram } from '../../../services/holograms/hologram.model';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { isNgTemplate } from '@angular/compiler';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hologram',
  templateUrl: './hologram.component.html',
  styleUrls: ['./hologram.component.scss']
})
export class HologramComponent implements OnInit {
  holograms: Hologram[];
  filteredHolograms: Hologram[];
  hologramUrl: string;
  selectedHologram: Hologram;
  categories: Array<string> = new Array<string>();
  reloadHolograms: boolean = true;
  projectsNames: string[];
  sourcesNames: string[];
  isFullscreen: boolean = false;

  constructor(
    db: AngularFirestore,
    public hologramsService: HologramsService,
    protected sanitizer: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private _location: Location
    ) { }

  ngOnInit() {
    this.projectsNames = this.projectsService.MasterProjectsNames;
    this.sourcesNames = this.hologramsService.Sources;
    this.isFullscreen = this.hologramsService.isFullscreen;
    this.hologramsService.get().subscribe(holograms => {

      this.holograms = holograms;
      this.filteredHolograms = holograms;

      this.route.params.subscribe(params => {
        this.selectedHologram = holograms.find(hologram => hologram.id == params.holoid);
      });

    });

  }

  selectCategory(category?: string) {
    if (category) {
      this.filteredHolograms = this.holograms.filter(hologram => hologram.source == category);
    } else {
      this.filteredHolograms = this.holograms;
    }
  }

  selectHologram(hologram: Hologram) {
    this.selectedHologram = hologram;
    this.reloadHolograms = false;
    this.router.navigate(['/hologram/' + hologram.id]);
  }

  addHologram() {
    var item: Hologram = {
      id: "sampleid",
      url: this.hologramUrl.replace("watch?v=", "embed/"),
      title: "sample title",
      source: "youtube",
    }

    this.hologramsService.add(item).then((doc: Hologram) => {
      item.id = doc.id;
      this.hologramsService.update(item);
    });
  }

  returnToMenu() {
    this.router.navigate(['/home']);
  }

}
