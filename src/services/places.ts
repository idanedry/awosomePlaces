import {Place} from "src/models/place";
import {Location} from "src/models/location";
import {Injectable} from "@angular/core";

@Injectable()
export class PlacesService {
    private places: Place[] = [];

    addPlace(title: string, description: string, location : Location, imagePath: string){
        const place = new Place(title,description,location,imagePath);
        this.places.push(place);
    }

    loadPlaces() {
        return this.places.slice();
    }
}