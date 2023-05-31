import { Component, OnInit } from '@angular/core';
import { Monster, MonsterBattle } from '../../interfaces/monster.interface';
import { MonstersService } from '../../services/monsters.service';
import { MonsterWinner } from '../../interfaces/monster.interface';

@Component({
  selector: 'app-battle-of-monsters',
  templateUrl: './battle-of-monsters.component.html',
  styleUrls: ['./battle-of-monsters.component.scss'],
})
export class BattleOfMonstersComponent implements OnInit {
  public player!: Monster | null;
  public computer!: Monster | null;
  public monsters: Monster[] = [];
  public winner!: Monster | null;

  constructor(private monsterService: MonstersService) {}

  ngOnInit(): void {
    this.monsterService.getAll().subscribe((res) => {
      this.monsters = res;
    });
  }

  monsterSelected(monster: Monster | null) {
    if(monster === null) {
      this.player = monster;
      this.computer = null;
      this.winner = null;
      return;
    }
    this.player = monster;
    this.computer = this.selectRandom(this.monsters, this.player);
  }

  selectRandom(monsters: Monster[], player: Monster): Monster | null {
    let randomIndex = Math.floor(Math.random() * monsters.length)

    if(monsters[randomIndex]?.id === player?.id) return this.selectRandom(monsters, player)

    return monsters[randomIndex];
  }

  battle() {
    let requestData: MonsterBattle = {
      monster1Id: this.player?.id,
      monster2Id: this.computer?.id
    }

    this.monsterService.battle(requestData).subscribe((res) => {
      console.log(`teste`)
      this.winner = res.winner
    });
  }
}
