import Character from './character';

export const schema = [`
  type Starship {
    name: String
    manufacturer: String
    cost_in_credits: String
    length: String
    max_atmosphering_speed: String
    crew: String
    passengers: String
    cargo_capacity: String
    consumables: String
    hyperdrive_rating: String
    MGLT: String
    starship_class: String
    pilots: [Character]
    created: String
    edited: String
  }
  `];

  export const resolvers = {
    Starship: {
    pilots(starship, args, context){
        return context.loader.character.loadMany(starship.pilots)
      },
    },
  }
