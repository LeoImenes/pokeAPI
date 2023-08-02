export interface Pokemon {
  id: number;
  name: string;
  size: number;
  height: number;
  weight: number;
  types: [];
  sprite: string;
}

export interface PokeByID {
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: false;
      slot: number;
    }
  ];
  base_experience: number;
  forms: [
    {
      name: string;
      url: string;
    }
  ];
  game_indices: [
    {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }
  ];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [
    {
      move: {
        name: string;
        url: string;
      };
      version_group_details: [
        {
          level_learned_at: number;
          move_learn_method: {
            name: string;
            url: string;
          };
          version_group: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
  name: string;
  order: number;
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
  };
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }
  ];
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  weight: number;
}

export interface pokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
  };
  egg_groups: [
    {
      name: string;
      url: string;
    },
    {
      name: string;
      url: string;
    }
  ];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: null;
  flavor_text_entries: [
    {
      flavor_text: string;
      language: {
        name: string;
        url: string;
      };
      version: {
        name: string;
        url: string;
      };
    }
  ];
  form_descriptions: [];
  forms_switchable: boolean;
  gender_rate: number;
  genera: [
    {
      genus: string;
      language: {
        name: string;
        url: string;
      };
    }
  ];
  generation: {
    name: string;
    url: string;
  };
  growth_rate: {
    name: string;
    url: string;
  };
  habitat: {
    name: string;
    url: string;
  };
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: [
    {
      language: {
        name: string;
        url: string;
      };
      name: string;
    }
  ];
  order: number;
  pal_park_encounters: [
    {
      area: {
        name: string;
        url: string;
      };
      base_score: number;
      rate: number;
    }
  ];
  pokedex_numbers: [
    {
      entry_number: number;
      pokedex: {
        name: string;
        url: string;
      };
    },
    {
      entry_number: number;
      pokedex: {
        name: string;
        url: string;
      };
    },
    {
      entry_number: number;
      pokedex: {
        name: string;
        url: string;
      };
    },
    {
      entry_number: number;
      pokedex: {
        name: string;
        url: string;
      };
    },
    {
      entry_number: number;
      pokedex: {
        name: string;
        url: string;
      };
    },
    {
      entry_number: number;
      pokedex: {
        name: string;
        url: string;
      };
    },
    {
      entry_number: number;
      pokedex: {
        name: string;
        url: string;
      };
    }
  ];
  shape: {
    name: string;
    url: string;
  };
  varieties: [
    {
      is_default: boolean;
      pokemon: {
        name: string;
        url: string;
      };
    }
  ];
}

export interface GenerationID {
  abilities: [];
  id: number;
  main_region: {
    name: string;
    url: string;
  };
  moves: [
    {
      name: string;
      url: string;
    }
  ];
  name: string;
  names: [
    {
      language: {
        name: string;
        url: string;
      };
      name: string;
    },
    {
      language: {
        name: string;
        url: string;
      };
      name: string;
    },
    {
      language: {
        name: string;
        url: string;
      };
      name: string;
    },
    {
      language: {
        name: string;
        url: string;
      };
      name: string;
    },
    {
      language: {
        name: string;
        url: string;
      };
      name: string;
    },
    {
      language: {
        name: string;
        url: string;
      };
      name: string;
    },
    {
      language: {
        name: string;
        url: string;
      };
      name: string;
    },
    {
      language: {
        name: string;
        url: string;
      };
      name: string;
    },
    {
      language: {
        name: string;
        url: string;
      };
      name: string;
    }
  ];
  pokemon_species: [
    {
      name: string;
      url: string;
    }
  ];
  types: [
    {
      name: string;
      url: string;
    }
  ];
}

export interface Generations {
  count: number;
  next: null;
  previous: null;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

export interface Types {
  count: number;
  next: null;
  previous: null;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}
