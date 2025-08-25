# Berry

The **Berry** endpoint provides detailed information about individual berries.

**Endpoint:**
```
GET https://pokeapi.co/api/v2/berry/{id or name}/
```

**Example Request:**
```
GET https://pokeapi.co/api/v2/berry/10/
```
**Example Response:**
```
{
    "firmness": {
        "name": "very-hard",
        "url": "https://pokeapi.co/api/v2/berry-firmness/4/"
    },
    "flavors": [
        {
            "flavor": {
                "name": "spicy",
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/"
            },
            "potency": 0
        },
        {
            "flavor": {
                "name": "dry",
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/"
            },
            "potency": 10
        },
        {
            "flavor": {
                "name": "sweet",
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/"
            },
            "potency": 10
        },
        {
            "flavor": {
                "name": "bitter",
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/"
            },
            "potency": 10
        },
        {
            "flavor": {
                "name": "sour",
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/"
            },
            "potency": 10
        }
    ],
    "growth_time": 8,
    "id": 10,
    "item": {
        "name": "sitrus-berry",
        "url": "https://pokeapi.co/api/v2/item/135/"
    },
    "max_harvest": 5,
    "name": "sitrus",
    "natural_gift_power": 60,
    "natural_gift_type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
    },
    "size": 95,
    "smoothness": 20,
    "soil_dryness": 7
}
```

---

## Berry Schema

| Field             | Description                                                                 | Type     | Example |
|-------------------|-----------------------------------------------------------------------------|----------|---------|
| id                | The identifier for this resource                                           | Integer  | 10      |
| name              | The name of this resource                                                  | String   | sirrus  |
| growth_time       | Time (in hours) for berry tree to grow one stage (4 stages total)           | Integer  | 8       |
| max_harvest       | Maximum number of berries per tree                                         | Integer  | 5       |
| natural_gift_power| Power of the move "Natural Gift" with this berry                           | Integer  | 60      |
| size              | Size of the berry (millimeters)                                            | Integer  | 95      |
| smoothness        | Smoothness (used in Pokeblocks/Poffins)                                    | Integer  | 20      |
| soil_dryness      | Rate at which soil dries (higher = faster)                                 | Integer  | 7       |
| firmness          | Firmness value of berry                                                    | Integer  | 20      |
| flavors           | Array of flavor objects with name, url, and potency                        | Array    | See Example |
| item              | Reference to associated item resource                                      | Object   | `{"name": "sirrus-berry","url": "https://pokeapi.co/api/v2/item/135/"}` |
| natural_gift_type | NamedAPIResource for Natural Gift type                                     | Object   | `{"name": "psychic","url": "https://pokeapi.co/api/v2/type/14/"}` |

---

## BerryFlavorMap Schema

| Field   | Description                                            | Type     | Example |
|---------|--------------------------------------------------------|----------|---------|
| potency | Potency of the berry flavor (higher = stronger flavor) | Integer  | 10      |
| flavor  | NamedAPIResource object for berry flavor               | Object   | `{"name": "sour","url": "https://pokeapi.co/api/v2/berry-flavor/5/"}` |

--