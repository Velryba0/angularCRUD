import { Component, OnInit } from '@angular/core';
import { BusInterface } from '../../models/busInterface';
import { BusesService } from '../../services/buses.service';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss']
})
export class BusesComponent implements OnInit {

  constructor(private busesService: BusesService) { }

  ngOnInit() {
    this.busesService.getBuses().subscribe(buses => {
      console.log(buses)
    })
  }

}
