import { HeroRepository } from "../../../domain/hero/hero.repository";
import { HeroFavoriteValue } from "../../../domain/hero/hero.value";

export class HeroUseCase {
  constructor(private readonly userRepository: HeroRepository) {}

  public  registerFavorite = async ({id, name}) => {
    const userValue = new HeroFavoriteValue({ id, name });
    const userCreated = await this.userRepository.registerFavorite(userValue);
    return userCreated
  }

  public  getDetailHero = async (name:string) => {
    const hero = await this.userRepository.findHeroByName(name)
    return hero
  }
}