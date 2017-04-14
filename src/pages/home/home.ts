import { Component } from '@angular/core';
import {AddPlacePage} from "../add-place/add-place";
import {Place} from "../../models/place";
import {PlacesService} from '../../services/places';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    constructor(private placesServices: PlacesService){}

    addPlacePage = AddPlacePage;
    places: Place[] = [];

    ionViewWillEnter(){
        this.places = this.placesServices.loadPlaces();
    }



}
