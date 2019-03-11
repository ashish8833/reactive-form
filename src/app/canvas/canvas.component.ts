import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.css"]
})
export class CanvasComponent implements OnInit {
  @Input() width = 500;
  @Input() height = 500;
  @Input() imgSrc;
  @Input() imageChangeStatus;
  @ViewChild("canvas") canvas: ElementRef;
  i = 0;
  cx: CanvasRenderingContext2D;
  backgroundImage = new Image();
  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    console.log("adsfadsf");
    console.log(this.i);
    console.log(this.imageChangeStatus);
    this.loadImg(this.imgSrc);
    this.i++;
  }
  ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext("2d");
    canvasEl.width = this.width;
    canvasEl.height = this.height;
  }
  loadImg(imgUrl) {
    let img = new Image();
    img.src = imgUrl;
    let This = this;
    img.onload = function() {
      This.cx.drawImage(img, 0, 0);
    };
  }
}
