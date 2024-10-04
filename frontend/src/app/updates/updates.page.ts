import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GunsService } from '../services/guns.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.page.html',
  styleUrls: ['./updates.page.scss'],
})
export class UpdatesPage implements OnInit {
  gun: any = {}
  cardId: any;
  type = [
    {
      id: 1,
      name: 'Automatic',
    },
    {
      id: 2,
      name: 'Semiautomatic',
    },
    {
      id: 3,
      name: 'Explosion',
    },
    {
      id: 4,
      name: 'Bolt',
    }
  ];

  constructor(private gunService: GunsService, private router: Router) { }

  ionViewWillEnter() {
    this.cardId = this.gunService.getCardId();  // Recupera el ID guardado
    console.log('ID para actualizar:', this.cardId);
  }

  ngOnInit() {

  }

  updateGun(){
      this.gunService.update(this.cardId, this.gun).subscribe((res: any) => {
      this.router.navigate(['all-guns']);
    },
    (error: any) => {
      console.error('error al actualizar el arma', error)
    })
  };

}
