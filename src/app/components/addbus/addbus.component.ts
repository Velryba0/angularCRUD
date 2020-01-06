import { Component, OnInit } from '@angular/core';
import { BusesService } from '../../services/buses.service';
import { BusInterface } from '../../models/busInterface';
import { NgForm } from '@angular/forms/forms';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.scss']
})
export class AddbusComponent implements OnInit {
 
  bus: BusInterface = {
    name: '',
    seats: 0,
    date: "",
    description: ''
  };

  constructor(private busService: BusesService) { }

  ngOnInit() {
  }

  onSaveBus(myForm: NgForm) {
    if(myForm.valid === true) {
      const dateNow = Date.now();
      this.bus.date = dateNow;
      this.busService.addBus(this.bus);
      myForm.resetForm();
    } else {
      console.log('Error al crear el autobús')
    }
  }

}
