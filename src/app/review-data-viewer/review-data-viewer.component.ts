import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-review-data-viewer",
  templateUrl: "./review-data-viewer.component.html",
})
export class ReviewDataViewerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("Yana was here");
  }
}
