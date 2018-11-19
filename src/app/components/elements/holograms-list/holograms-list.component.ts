import { Component, OnInit } from '@angular/core';
import { Hologram } from 'src/app/services/holograms/hologram.model';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { HologramsService } from 'src/app/services/holograms/holograms.service';

@Component({
  selector: 'app-holograms-list',
  templateUrl: './holograms-list.component.html',
  styleUrls: ['./holograms-list.component.scss']
})
export class HologramsListComponent implements OnInit {

  selectedHologram: Hologram;
  holograms: Hologram[];
  filteredHolograms: Hologram[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public hologramsService: HologramsService,

  ) { }

  ngOnInit() {
    this.hologramsService.get().subscribe(holograms => {
      this.holograms = holograms;
      this.filteredHolograms = holograms;

      this.route.queryParamMap
        .subscribe(params => {
          this.filteredHolograms = this.holograms.filter(hologram => {
            for (var keyInd in params.keys) {
              let key = params.keys[keyInd];
              if (hologram[key] != params["params"][key]) {
                return false;
              }
            }
            return true;
          });
        });
    });

  }

  selectHologram(hologram: Hologram) {
    console.log('hologram', hologram)
    this.selectedHologram = hologram;
    this.router.navigate(['/hologram/' + hologram.id]);
  }
}
