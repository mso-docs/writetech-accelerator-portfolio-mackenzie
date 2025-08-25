# Learn More About PokéAPI v2

![PokéAPI Logo](https://content.pstmn.io/189b1d30-5647-442b-8a96-e5c5b4d95743/cG9rZWFwaV8yNTY=)

## What is PokéAPI?
[PokéAPI](https://pokeapi.co/) is a free, open-source RESTful API, which provides Pokémon stats and information. It pulls this information from the Pokémon game data.

### Quick Facts
- **Base URL:** [https://pokeapi.co/api/v2](https://pokeapi.co/api/v2)
- **API Version:** v2
- **Supported Methods:** `GET`

## Endpoints
PokéAPI has many different endpoints, each of which can be used to find out specific information about something within the Pokémon world.

Endpoints look like part of a URL-- because they are! You add them to the API request to tell it where to pull information-- and what information to pull.

Here is an overview of the endpoints within PokéAPI:
- **Resource Lists/Pagination:** If an endpoint is called without a resource ID or name, it will return a list of available resources for your request.
- **Berries:** Find out information and stats about collectible and growable berries.
- **Contests:** Find out about Pokémon contests, their types, and their effects.
- **Encounters:** Learn about in-game encounters and their conditions.
- **Evolution:** Learn about evolutions, their triggers, and the various evolution trees, or chains.
- **Games:** Learn about the various Pokémon games, their generations, and any Pokédex information associated with them.
- **Items:** Documents items, their attributes, where they are stored, and any effects they may have.
- **Locations:** Catalogues locations and regions within the Pokémon world.
- **Machines:** Learn about machines that teach moves to Pokémon.
- **Moves:** Learn about Pokémon moves, their categories, the methods they are learned, and more.
- **Pokémon:** Details Pokémon types, species, habitats, locations, natures, growth rates, and more.
- **Utility:** Shows any resources involved in the creation of PokéAPI.

---

### Berries
There are several endpoints based around berries in the Pokémon franchise. Berries are items that Pokémon can use to enhance stats, restore HP, and more. The PokéAPI will return information about these berries, which can help you learn more about them.

You can use the following endpoints to get information about berries:
- `berry`: Describes the name, growth time, flavors, items, and more associated with a specific berry type.
- `berry-firmness`: Describes the softness or hardness of a specified berry.
- `berry-flavors`: Describes the flavor of the berry, which will tell you if a Pokémon's nature will benefit from eating it.

---

#### Berry
The berry endpoint allows you to access information about berries.

You can make a request to the `berry` endpoint like this:

```
https://pokeapi.co/api/v2/berry/{id or name}/
```

In the query parameters of the endpoint, where it says `{id or name}`, you can put the `name` or `id` associated with the berry you want to fetch data for.

For example, if you wanted to fetch data for the `sitrus` berry, which has an id of `10`, you would make the following request:

```
GET https://pokeapi.co/api/v2/berry/sitrus/
```

---

#### Berry Flavors
Berry flavors impact Pokémon differently depending on their nature. This endpoint returns which berry flavors provide benefits based on a Pokémon's nature, along with the associated contest type for each flavor.

You can contact this endpoint using the following request:

```
https://pokeapi.co/api/v2/berry-flavor/{id or name}/
```

In the query parameters of the endpoint, where it says `{id or name}`, you can put the `name` or `id` associated with the berry firmness you want to fetch data for.

For example, if you wanted to fetch data for the `spicy` flavor type, which has an id of `1`, you would make the following request:

```
GET https://pokeapi.co/api/v2/berry-flavor/spicy/
```

---

### Contest Effects
The `Contest Effects` endpoint allows you to review effects of moves used during contests.

To call the `Contest Effects` endpoint, use the following request format:

```
GET https://pokeapi.co/api/v2/contest-effect/{id}/
```

In the place of the `{id}`, input the move ID. This will allow you to search for contest effects associated with that move ID.

---

### Encounters
There are several endpoints based around encounters in Pokémon. In the world of Pokémon, encounters are any methods that a player can use to encounter a wild Pokémon.

You can use the following endpoints to get information about encounters:
- `encounter-method`: Shows methods that a player can use to encounter a wild Pokémon, such as walking or surfing.
- `encounter-condition`: Shows any conditions which may affect Pokémon encounters, such as day, night, or weather.
- `encounter-condition-value`: Shows the states associated with a particular condition, such as time of day or time of night.

---

#### Encounter Method
The `Encounter Method` endpoint allows you to see any methods associated with catching wild Pokémon.

To call the `Encounter Method` endpoint, use the following request format:

```
GET https://pokeapi.co/api/v2/encounter-method/{id or name}/
```

In the place of the `{id or name}`, input either the `id` or `name` associated with the encounter method. This will allow you to search for encounter methods associated with the `id` or `name` you input.

---

#### Encounter Condition Value
In Pokémon, encounter condition values are the states that a specific encounter condition can have, such as time of day (i.e., daytime or nighttime).

Encounter condition values were mentioned in the `encounter-condition` endpoint above, but you can gain additional insight into these encounter condition values using the `encounter-condition-value` endpoint.

To call the `Encounter Condition Value` endpoint, use the following request format:

```
GET https://pokeapi.co/api/v2/encounter-condition-value/{id or name}/
```

In the place of the `{id or name}`, input either the `id` or `name` associated with the encounter condition. This will allow you to search for encounter conditions associated with the `id` or `name` you input.

---

### Games
There are several endpoints based around the Pokémon games. The Pokémon world spans across many different games.

You can use the following endpoints to get information about game-specific topics:
- `generations`: Shows the generations of the Pokémon games.
- `pokedexes`: Provides details about the Pokédexes in the Pokémon games.
- `version`: Shows any versions associated with the Pokémon games.
- `version-groups`: Groups together similar versions of the Pokémon games.

---

#### Generations
In the world of Pokémon, a generation is a group of Pokémon games with a specific grouping of Pokémon included. Each generation introduces new Pokémon, Moves, Abilities, and Types, that do not exist in prior generations. Successive generations build upon the Pokédexes of the old generations, in most cases.

There are many generations in Pokémon, which you can call using the following endpoint:

```
GET https://pokeapi.co/api/v2/generation/{id or name}/
```

In the place of the `{id or name}`, input the `id` or `name` associated with the generation.

---

#### Pokédexes
In the world of Pokémon, a Pokédex is essentially a handheld encyclopedia of Pokémon. Using a Pokédex, you can collect information about the Pokémon you catch, which gives helpful insight in the games. The `pokedex` endpoint will give you information about the Pokédexes across all of the Pokémon games.

You can use the following endpoint to make a request to the `pokedex` endpoint:

```
GET https://pokeapi.co/api/v2/pokedex/{id or name}/
```

In the place of the `{id or name}`, input the `id` or `name` associated with the Pokédex.

---

## Conclusion
PokéAPI gives you a comprehensive look at all of the in-game stats, items, and information. It gives players the insight needed to get the most out of their Pokémon run. It is built on a robust database of Pokémon information, which enables players to maximize and optimize their Pokémon builds.

After reading this documentation, you should have a better understanding of how to access this data. You should also understand how the API works-- and how it displays its resources.

---

## Learn More
The PokéAPI website features extensive [documentation](https://pokeapi.co/docs/v2), which will help you utilize all of the endpoints PokéAPI has to offer. On this [site](https://pokeapi.co/docs/v2), the [Locations](https://pokeapi.co/docs/v2#locations-section), [Machines](https://pokeapi.co/docs/v2#machines-section), [Moves](https://pokeapi.co/docs/v2#moves-section), [Pokémon](https://pokeapi.co/docs/v2#pokemon-section), and [Utilities](https://pokeapi.co/docs/v2#utility-section) endpoints are covered in great detail. If you want to learn more about the API and the resources it contains, the [PokéAPI site](https://pokeapi.co/docs/v2) will be invaluable.
