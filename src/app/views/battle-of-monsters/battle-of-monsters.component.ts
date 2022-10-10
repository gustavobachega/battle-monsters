import { Component, OnInit } from '@angular/core';
import { Monster } from '../../interfaces/monster.interface';
import { MonstersService } from '../../services/monsters.service';

@Component({
  selector: 'app-battle-of-monsters',
  templateUrl: './battle-of-monsters.component.html',
  styleUrls: ['./battle-of-monsters.component.scss'],
})
export class BattleOfMonstersComponent implements OnInit {
  public player!: Monster | null;
  public computer!: Monster | null;
  public monsters: Monster[] = [];

  constructor(private monsterService: MonstersService) {}

  ngOnInit(): void {
    this.monsterService.getAll().subscribe((res) => {
      this.monsters = res;
    });
  }

  monsterSelected(monster: Monster | null) {
    this.player = monster;
    this.computer = null;
  }
}
