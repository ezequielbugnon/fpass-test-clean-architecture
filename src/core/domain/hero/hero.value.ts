import { HeroFavoriteEntity } from "./hero.entity";

export class HeroFavoriteValue implements HeroFavoriteEntity {
  id: string;
  name: string;

  constructor({ id, name}: { id: string; name: string}) {
    this.id = id;
    this.name = name;
  }
}