// Importa el servicio APIServiceService y el decorador Component desde los módulos de Angular.
import { PokeapiService } from './../Services/apiservice.service';
import { Component } from '@angular/core';

  // Declara una variable local para almacenar el nombre desl Pokémon.

// Define el componente HomePage con su selector, plantilla y estilos.
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemon: any;
  pokemon1: any;
  pokemon2: any;
  pokemon3: any;
  
  // Constructor del componente que recibe una instancia del servicio APIServiceService.
  constructor(private PokeapiService: PokeapiService) {}
 Id:number=1;
 Name:string="";
  // Método para obtener datos de un Pokémon dado su ID.
  getPokemonDataID(id: number) {

    try {
      
      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.PokeapiService.getPokemonID(id).subscribe((response => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        this.pokemon = response.sprites.front_default;// Imprime el nombre del Pokémon en la consola.
        this.pokemon1 = response.name;
        console.log(this.pokemon);
      
      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }


  getPokemonDataName(Name: string) {

    try {
      
      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.PokeapiService.getPokemonName(Name).subscribe((response => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        this.pokemon2 = response.sprites.front_default;// Imprime el nombre del Pokémon en la consola.
        this.pokemon3 = response.id;
        console.log(this.pokemon);
      
      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }
  // Declaración de variables para almacenar datos del ítem.
item: any;
itemid: string = "";
nameit = "";

// Método para obtener datos de un ítem por su nombre.
getItemData(nameit: string) {
  try {
    // Llama al método getItemName del servicio y se suscribe al observable.
    this.PokeapiService.getItemName(nameit).subscribe((response => {
      // Almacena la respuesta en la variable local 'item'.
      this.item = response;
      // Imprime los datos del ítem en la consola.
      console.log(this.item);
    }));
  } catch (error) {
    // Captura y maneja cualquier error que pueda ocurrir durante la suscripción.
    console.log(error);
  }
}

// Declaración de variables para almacenar datos del segundo ítem.
item1: any;
itemid1: string = "";
nameit1 = "";

// Método para obtener datos del segundo ítem por su nombre.
getItemData1(nameit1: string) {
  try {
    // Llama al método getItemName del servicio y se suscribe al observable.
    this.PokeapiService.getItemName(nameit1).subscribe((response => {
      // Almacena la respuesta en la variable local 'item1'.
      this.item1 = response;
      // Imprime los datos del segundo ítem en la consola.
      console.log(this.item1);
    }));
  } catch (error) {
    // Captura y maneja cualquier error que pueda ocurrir durante la suscripción.
    console.log(error);
  }
}

}
