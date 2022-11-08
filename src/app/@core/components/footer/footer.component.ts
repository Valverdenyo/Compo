import { SharedElement } from './../../interfaces/shared-element.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'blog-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  /**
   * Comentario inicial
   */
  currentYear: number = new Date().getFullYear();
  /**
   * Comentario 1
   * Comentario 2
   */

  author = 'Anartz Mugika Ledo';

  sharedElements: SharedElement[] = [
    {
      url: 'https://twitter.com/',
      path: 'mugan86',
      icon: 'fab fa-twitter'
    },
    {
      url: 'https://github.com/',
      path: 'mugan86',
      icon: 'fab fa-github'
    },
    {
      url: 'https://www.linkedin.com/in/',
      path: 'anartz-mugika-0007a062',
      icon: 'fab fa-linkedin'
    },
    {
      url: 'https://bintray.com/',
      path: 'amugika/maven',
      icon: 'fas fa-frog'
    },
    {
      url: 'https://npmjs.com/',
      path: '~mugan86',
      icon: 'fab fa-npm'
    }
  ];
  /**
   * Hola Saludo
   * 
   * @returns Devuelve un Hola
   */
  holaMundo() {
    return 'hola';
  }

  /**
 * Hola Saludo personalizado
 * @example
 * Tenemos un nombre Juanma
 * Tenemos un apellido Perez
 * Mostrarnos un saludo con contenido "hola Juanma Perez" 
  * @param nombre Nombre al que vamos a saludar
 * @param apellido Apellido a saludar
 * @returns Devuelve un Hola con el Nombre
 */
  private holaMundoPersonalizado(nombre: string, apellido: string): string {
    return 'hola ' + nombre + ' ' + apellido;
  }


