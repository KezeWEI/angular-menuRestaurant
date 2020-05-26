import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public api='api/productlist';
  public domaine='';
  public form:any[]=[];
  constructor(
    private service:CommonService
  ) { 
    this.domaine=service.domaine;
  }

  ngOnInit(): void {
    this.service.get(this.api).then((response:any)=>{
      console.log(response);
      this.form=response.result;
    })
  }

}
