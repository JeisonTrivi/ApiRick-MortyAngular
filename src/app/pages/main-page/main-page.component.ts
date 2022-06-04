import { Component } from '@angular/core';
import { Personaje } from 'src/app/interfaces/Personaje';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  personajes!: Personaje[];
  personajesCopy!: Personaje[];
  


  constructor(public httpClient: HttpClient) {
    this.getData();
   }
   
  async getData() {
    await this.httpClient.get(environment.apiUrl + '/character')
      .subscribe((data: any) => {
      this.personajes = data.results.map(({id, name, status, species, series, gender, type, image, url, location, origin}:Personaje) => {
        
        return {
          id: id,
          name: name,
          status: status,
          species: species,
          series: series,
          gender: gender,
          type: type,
          image: image,
          url: url,
          location: location,
          origin: origin
        }
      });
      
      this.personajesCopy = this.personajes;
    });
  }

  filter(e: any){
    const search = e.target.value;

    this.personajes = this.personajesCopy.filter(({name }: Personaje) => {
      return name.toLowerCase().includes(search.toLowerCase());
    });
    
  }
}
