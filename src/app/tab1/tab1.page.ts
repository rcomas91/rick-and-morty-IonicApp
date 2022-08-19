import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CoinmarketService } from '../coinmarket.service';
import { MasinfoPage } from '../masinfo/masinfo.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
characters=[];
  constructor(public navCtrl:NavController, public coinmarket:CoinmarketService) {}

  ngOnInit(){
    
    this.coinmarket.obtenerDatos().subscribe(
      res=>{this.characters=res.results},
      (error)=>  {console.log(error)}
    )

  };
  }

 

