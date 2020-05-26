import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.component.html',
  styleUrls: ['./pcontent.component.scss']
})
export class PcontentComponent implements OnInit {
  public id:any;
  public list:any;
  public domaine:any;
  constructor(
    private route:ActivatedRoute,
    private service:CommonService
  ) {
    this.domaine=service.domaine;
   }

  ngOnInit(): void {
    this.route.params.subscribe((value:any)=>{
      this.id=value.ids;
    })
    console.log(this.id);
    var api='api/productcontent?id='+this.id;
    this.service.get(api).then((response:any)=>{
      this.list=response.result[0];
      console.log(this.list); 
    })
  }
}
