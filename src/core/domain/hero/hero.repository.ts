//import { UserEntity } from "./user.entity";

export interface HeroRepository {
  findHeroByName(name: string): Promise<any | null>;
  registerFavorite(favorite: any): Promise<any | null>;
  listHeros(): Promise<any | null>;
}