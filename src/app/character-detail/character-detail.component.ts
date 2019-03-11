import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  public character;
  public id;
  public errorMsg;
  constructor(private characterService: CharacterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //get ID
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.id = parseInt(params.get('id'));
    });

    this.characterService.getOne(this.id).subscribe(
      data => this.character = data , error => this.errorMsg = error 
    )
  }
  back(){
    this.router.navigate(['../']);
  }

}
