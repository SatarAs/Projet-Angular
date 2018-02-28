import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {
  private jeux: Array<object>;
  private title: string = 'Liste des Jeux';
  private description: string = 'Voici la liste des jeux avec sa description';

  constructor() { }

  ngOnInit() {
    this.jeux = [

      {
        id: 1,
        title: 'Counter-Strike : Global Offensive',
        description: 'Jeu à la première personne. Une équipe doit poser la bombe, tandis que l\'autre doit la désamorcer',
        picture: 'https://d3isma7snj3lcx.cloudfront.net/optim/images/photos/30/50/06/05/counter-strike-global-offensive-jaquette-ME3050060535_2.jpg',
        editeur: 'Valve',
        type: 'FPS',
        releaseDate: 21-8-2012,
        available : true,
      },

      {
        id: 2,
        title: 'Counter-Strike : Source',
        description: 'Jeu à la première personne. Une équipe doit poser la bombe, tandis que l\'autre doit la désamorcer',
        picture: 'http://olympus-killeurs.e-monsite.com/medias/album/images/00148282.jpg',
        editeur: 'Valve',
        type: 'FPS',
        releaseDate: 1-11-2004,
        available : false,
      },

      {
        id: 3,
        title: 'Fortnite',
        description: 'Jeu à la troisième personne. Chacun pour soit ou en équipe, vous devez éliminer tous vos adversaires pour n\'être que la dernière personne en vie',
        picture: 'https://media.senscritique.com/media/000017035158/source_big/Fortnite.jpg',
        editeur: 'Epic Games',
        type: 'FPS/Action',
        releaseDate: 25-7-2017,
        available : true,
      },

    ]
  }

  clickJeu(title) {
    alert("Votre jeu \"" + title + "\" est sélectionné");
  }

  // selectJeu(id:number) {
  //   this.router.navigate(['/jeu/',id]);
  // }

}
