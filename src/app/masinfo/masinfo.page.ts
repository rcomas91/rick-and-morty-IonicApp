import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinmarketService } from '../coinmarket.service';

@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.page.html',
  styleUrls: ['./masinfo.page.scss'],
})
export class MasinfoPage implements OnInit {
  character:any;
  id:any
  constructor(private route:ActivatedRoute,public coinmarket:CoinmarketService) { }
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
    this.coinmarket.obtenerDatosChar(this.id).subscribe(res=>{
      this.character=res
    })
      }

    

}
