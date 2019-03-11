import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { Observable } from "rxjs";
@Injectable()
export class WebsocketService {
  private socket;
  public socketID: string;
  constructor() {
    this.connect();
  }

  private connect() {
    this.socket = io("http://172.16.1.14:1884/data");
    this.socket.on("connect", () => {
      console.log("Connections");
      this.socketID = this.socket.id;
    });
  }

  public on(url: string): Observable<any> {
    let That = this;
    return new Observable<any>(observer => {
      this.socket.on(url, (data: any) => observer.next(data));
    });
  }

  public emit(url: string, data) {
    this.socket.emit(url, data);
  }
}
