import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HologramsService } from '../../../services/holograms/holograms.service';
import { Hologram } from '../../../services/holograms/hologram.model';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { isNgTemplate } from '@angular/compiler';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';


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

  constructor(
    db: AngularFirestore,
    public hologramsService: HologramsService,
    protected sanitizer: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.hologramsService.get().subscribe(holograms => {
      console.log('holograms', holograms);

      holograms.forEach(hologram => {
        if (!this.categories.includes(hologram.category))
          this.categories.push(hologram.category);
      });
      console.log('this.categories', this.categories);

      this.holograms = holograms;
      this.filteredHolograms = holograms;

      this.route.params.subscribe(params => {
        console.log('params.holoid', params.holoid);
        this.selectedHologram = holograms.find(hologram => hologram.id == params.holoid);
      });

      // this.selectedHologram = this.holograms.find(hologram => hologram.id = params.holoid);
    });

  }

  selectCategory(category: string) {
    if (category) {
      this.filteredHolograms = this.holograms.filter(hologram => hologram.category == category);
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
      category: "youtube",
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
