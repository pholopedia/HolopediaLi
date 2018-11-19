import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized, Params } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() categoryType: string;
  @Input() categoriesNames: string[];

  selectedCategory: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.selectedCategory = "";

    this.route.queryParamMap.subscribe(params => {
      this.selectedCategory = this.categoriesNames.find(category => category == params["params"][this.categoryType]);
    });
  }

  selectCategory(category?: string) {
    this.selectedCategory = category;

    // Object.assign is used since you apparently 
    // cannot add properties to snapshot query params
    const queryParams: Params = Object.assign({}, this.route.snapshot.queryParams);

    // Do something with the params
    queryParams[this.categoryType] = category;
     this.router.navigate([], {  queryParams: queryParams });
  }

}
