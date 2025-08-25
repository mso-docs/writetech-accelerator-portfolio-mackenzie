# Berry Firmness

The **Berry Firmness** endpoint shows the firmness associated with berries (soft, hard, etc.).

**Endpoint:**
```
GET https://pokeapi.co/api/v2/berry-firmness/{id or name}/
```

**Example Request:**
```
https://pokeapi.co/api/v2/berry-firmness/3/
```

**Example Response:**
```
{
    "berries": [
        {
            "name": "rawst",
            "url": "https://pokeapi.co/api/v2/berry/4/"
        },
        {
            "name": "persim",
            "url": "https://pokeapi.co/api/v2/berry/8/"
        },
        {
            "name": "wiki",
            "url": "https://pokeapi.co/api/v2/berry/12/"
        },
        {
            "name": "mago",
            "url": "https://pokeapi.co/api/v2/berry/13/"
        },
        {
            "name": "pinap",
            "url": "https://pokeapi.co/api/v2/berry/20/"
        },
        {
            "name": "kelpsy",
            "url": "https://pokeapi.co/api/v2/berry/22/"
        },
        {
            "name": "qualot",
            "url": "https://pokeapi.co/api/v2/berry/23/"
        },
        {
            "name": "hondew",
            "url": "https://pokeapi.co/api/v2/berry/24/"
        },
        {
            "name": "cornn",
            "url": "https://pokeapi.co/api/v2/berry/27/"
        },
        {
            "name": "magost",
            "url": "https://pokeapi.co/api/v2/berry/28/"
        },
        {
            "name": "durin",
            "url": "https://pokeapi.co/api/v2/berry/34/"
        },
        {
            "name": "kebia",
            "url": "https://pokeapi.co/api/v2/berry/42/"
        },
        {
            "name": "kasib",
            "url": "https://pokeapi.co/api/v2/berry/48/"
        },
        {
            "name": "apicot",
            "url": "https://pokeapi.co/api/v2/berry/57/"
        },
        {
            "name": "enigma",
            "url": "https://pokeapi.co/api/v2/berry/60/"
        }
    ],
    "id": 3,
    "name": "hard",
    "names": [
        {
            "language": {
                "name": "ja-Hrkt",
                "url": "https://pokeapi.co/api/v2/language/1/"
            },
            "name": "かたい"
        },
        {
            "language": {
                "name": "zh-Hant",
                "url": "https://pokeapi.co/api/v2/language/4/"
            },
            "name": "堅硬"
        },
        {
            "language": {
                "name": "fr",
                "url": "https://pokeapi.co/api/v2/language/5/"
            },
            "name": "Ferme"
        },
        {
            "language": {
                "name": "es",
                "url": "https://pokeapi.co/api/v2/language/7/"
            },
            "name": "Dura"
        },
        {
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "name": "Hard"
        },
        {
            "language": {
                "name": "zh-Hans",
                "url": "https://pokeapi.co/api/v2/language/12/"
            },
            "name": "坚硬"
        }
    ]
}
```
---

## Berry Firmness Schema

| Field   | Description                                                                 | Type   | Example |
|---------|-----------------------------------------------------------------------------|--------|---------|
| id      | Identifier for firmness resource                                           | Integer| 3       |
| name    | Firmness name                                                              | String | hard    |
| berries | Array of NamedAPIResources (berries with this firmness)                    | Array  | `{"name": "enigma","url": "https://pokeapi.co/api/v2/berry/60/"}` |
| names   | Array of translated names with language object                             | Array  | `[{"language":{"name":"ja-Hrkt","url":"https://pokeapi.co/api/v2/language/1/"},"name":"かたい"}]` |

---
