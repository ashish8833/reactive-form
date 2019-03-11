import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "reactive-form";
  imgSrc = "http://i.imgur.com/yf6d9SX.jpg";
  arrayImg = ["https://i.imgur.com/poQCkyx.jpg"];
  imageChangeStatus = 0;
  constructor() {}
  ChangeImage() {
    this.imageChangeStatus = Math.random();
    this.imgSrc = this.arrayImg[
      Math.floor(Math.random() * this.arrayImg.length)
    ];
  }
}
