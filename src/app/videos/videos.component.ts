import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor(private serv: VideosService) { }

  ngOnInit() {
    this.serv.getAll().subscribe(
      x => console.log(x),
      err => console.log(err)
      );
  }

}
