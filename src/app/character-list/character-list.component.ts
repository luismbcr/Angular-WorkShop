import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  public characters = [];
  public errorMsg;
  public loading=true;
  constructor(private characterService: CharacterService, private router : Router) { }

  ngOnInit() {
    this.characterService.getAll().subscribe(
      data => {this.characters = data.results; this.loading=false;}, error => this.errorMsg = error
    )
  }
  viewDetail(character){
    this.router.navigate(['character',character.id]);
  }

}
