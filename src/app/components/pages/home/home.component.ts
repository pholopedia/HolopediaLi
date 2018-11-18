import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HologramsService } from '../../../services/holograms/holograms.service';
import { Hologram } from '../../../services/holograms/hologram.model';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { isNgTemplate } from '@angular/compiler';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  holograms: Hologram[];
  hologramUrl: string;
  selectedHologram: Hologram;

  constructor(
    db: AngularFirestore,
    public hologramsService: HologramsService,
    protected sanitizer: DomSanitizer,
    private router: Router,
    ) {

  }

  ngOnInit() {

    this.hologramsService.get().subscribe(holograms => {
      this.holograms = holograms;
    });

  }

  selectHologram(hologram: Hologram) {
    this.selectedHologram = hologram;
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


}
