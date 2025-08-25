# Getting Started with PokeAPI v2
## What is PokéAPI?
PokéAPI is a free, open-source RESTful API, which provides Pokémon stats and information. It pulls this information from the Pokémon game data. 

## About PokeAPI
### Base URL
[https://pokeapi.co/api/v2](https://pokeapi.co/api/v2)

### API Version: 
`v2`

### Supported Methods
`GET`

# Overview
This documentation will help users understand how to:
- Navigate the API

- Get meaningful Pokémon data

- Integrate Pokémon data into projects

## Getting Started
Here are some topics to help you get started using PokéAPI. This section will also help you get the most out of this Postman Notebook.

>>**TIP:** If you're new to APIs-- or Postman-- don't worry! This section will help you figure out any next steps.

### What You'll Learn
1. How to send requests to PokéAPI.
2. How to view and understand the responses.
3. How to navigate between different resources (i.e., Pokémon, abilities, types, and more).

### Requirements
1. Postman (can be either the web or desktop application).
2. A stable internet connection.
3. A free Postman account to save your progress.

>>**NOTE:** No Authentication or API key is required to access this API.

### Using the PokeAPI Postman Collection
We will be using [this PokeAPI Postman collection](https://www.postman.com/avionics-geoscientist-49124907/geektest/collection/h1hvfev/pokeapi?action=share&source=copy-link&creator=46709198) in this tutorial. 

1. **Export PokéAPI Collection:** Click Export to download the collection JSON file. Save this file somewhere you will be able to access it.
2. **Make a Workspace:** If you haven't already, create a new Workspace. Click on the Workspaces tab and select Create Workspace.
3. **Import the PokéAPI Collection to your Postman Workspace:** In your new Workspace, click Import. This will open a new window.
4. **Select a File to Import:** In the new Import window, select your exported JSON file or drag it into the dropbox. This will bring the PokéAPI collection into your Workspace.
5. **Explore By Folder:** Each endpoint has its own Postman request, with parameters and other information to show you how to communicate with the API.
6. **Click Send:** Click on any request and hit Send to send an HTTP request to the PokéAPI server.
7. **View Results:** In the Body tab of Postman, you will see the raw JSON response from the API. You can preview, visualize, or test the data returned.
8. **Try Modifying Requests:** Want to get information on another Pokémon? Change one of the path parameters in the endpoint. You can request information on `Houndoom`, `Skarmory`, `Bulbasaur`, and more! Simply change the path parameters to make the requests you need.

---
## API Basics
PokéAPI is a beginner-friendly RESTful API. If you have never used an API before, you're in the right place-- you can learn more about how they work here.

### What is an API?
An API (Application Programming Interface) allows two systems to communicate. This interface is language-agnostic, meaning that systems written in different programming languages can still communicate. APIs make it easy to develop useful tools that anyone can use-- like PokéAPI!

PokéAPI exposes a structured dataset of Pokémon-related information, which you can query over the internet.

### RESTful Architecture
PokéAPI follows REST (Representational State Transfer) principles, which means:
* Each resource (i.e., Pokémon, berries, moves, etc.) has its own unique URL.
* You interact with resources using standard HTTP Methods (i.e., GET).
* Responses are stateless, meaning they are self-contained.

### Example
If you used the following GET method in Postman, you would return all data about Bulbasaur:

`GET https://pokeapi.co/api/v2/pokemon/bulbasaur`

You would receive a JSON response like this:
```
{
  "abilities": [
    {
      "ability": {
        "name": "overgrow",
        "url": "https://pokeapi.co/api/v2/ability/65/"
      },
      "is_hidden": false,
      "slot": 1
    },
    {
      "ability": {
        "name": "chlorophyll",
        "url": "https://pokeapi.co/api/v2/ability/34/"
      },
      "is_hidden": true,
      "slot": 3
    }
  ],
  "base_experience": 64,
  "cries": {
    "latest": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg",
    "legacy": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/1.ogg"
  },
  "forms": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
    }
  ],
  "game_indices": [
    {
      "game_index": 153,
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    },
```
>>NOTE: The actual response is much longer-- 13,000+ lines in length. To view it in full, click [here](https://pokeapi.co/api/v2/pokemon/bulbasaur).

### Interpreting the JSON
If you've never seen a JSON (JavaScript Object Notation) response before, don't worry! JSON responses are designed to be human-readable and lightweight. PokéAPI's JSON responses give useful information about your request.

Here are some important things to note:

- Keys like name , `id`, `abilities`, and `moves` describe PokéAPI.
- Some fields, such as `type` or `url`  may link to other API endpoints. You can make follow-up requests to these endpoints.

### HTTP Methods Used
PokéAPI is a **read-only** API. You can **only** retrieve data, not modify it. 

You can only perform `GET` requests using PokéAPI. This will allow you to pull data about Pokémon, abilities, moves, types, and items.

## Authentication and Access
PokéAPI is a public REST API. It does not require any authentication or API keys.

## Fair Use Policy
PokéAPI expects developers to follow the rules below:
1. Locally cache resources whenever you request them.
2. Be nice to fellow PokéAPI developers.
3. Report security vulnerabilities responsibly.

>>**TIP:** Developers that do not abide by the Fair Use Policy will have their IP address permanently banned. 

## Rate Limiting and Usage Guidelines
Since 2018, PokéAPI has not utilized any formal rate limiting measures. This new policy aims to encourage the educational utilization of PokéAPI. However, developers are encouraged to limit the frequency of their requests to limit hosting costs for the service.

As a best practice, we recommend:
* Limiting yourself to 100-300 requests per minute.
* Spreading requests out, if performing batch operations.
* Abiding by the Fair Use Policy.

## Core Concepts
PokéAPI is organized around RESTful resources. These resources represent different pieces of the Pokémon world. Major resources, such as Pokémon name or type, have their own endpoints. 

These endpoints are accessible by entering a keyword into the API request, such as `pokémon` or abilities. To query a specific entity within the endpoint, you can add the id or name of the entity to the query parameter. 

For example, you may want to find information out about a specific Pokémon, such as Pikachu. To do this, you would need to query the `pokemon` endpoint:

`GET https://pokeapi.co/api/v2/pokemon/pikachu`

You can see the response below:
```
{
  "abilities": [
    {
      "ability": {
        "name": "static",
        "url": "https://pokeapi.co/api/v2/ability/9/"
      },
      "is_hidden": false,
      "slot": 1
    },
    {
      "ability": {
        "name": "lightning-rod",
        "url": "https://pokeapi.co/api/v2/ability/31/"
      },
      "is_hidden": true,
      "slot": 3
    }
  ],
  "base_experience": 112,
  "cries": {
    "latest": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg",
    "legacy": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/25.ogg"
  },
  "forms": [
    {
      "name": "pikachu",
      "url": "https://pokeapi.co/api/v2/pokemon-form/25/"
    }
  ],
  "game_indices": [
    {
      "game_index": 84,
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    },
    {
      "game_index": 84,
      "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
      }
    },
    {
      "game_index": 84,
      "version": {
        "name": "yellow",
        "url": "https://pokeapi.co/api/v2/version/3/"
      }
    },
    {
      "game_index": 25,
      "version": {
        "name": "gold",
        "url": "https://pokeapi.co/api/v2/version/4/"
      }
    },
    {
      "game_index": 25,
      "version": {
        "name": "silver",
        "url": "https://pokeapi.co/api/v2/version/5/"
      }
    },
    {
      "game_index": 25,
      "version": {
        "name": "crystal",
        "url": "https://pokeapi.co/api/v2/version/6/"
      }
    },
    {
      "game_index": 25,
      "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
      }
    },
    {
      "game_index": 25,
      "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
      }
    },
    {
      "game_index": 25,
      "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
      }
    },
    {
      "game_index": 25,
      "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
      }
    },
    {
      "game_index": 25,
      "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
      }
    },
    {
      "game_index": 25,
      "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
      }
    },
    {
      "game_index": 25,
      "version": {
        "name": "pearl",
        "url": "https://pokeapi.co/api/v2/version/13/"
      }
    },
  ```

  >>**NOTE**: The actual response for this request is extremely long and it has been amended. You can view the whole response [here](https://pokeapi.co/api/v2/pokemon/pikachu).

  Obviously, this returns quite a lot of information about Pikachu! Let's say you only wanted to learn about where to catch Pikachu. You could use the `pokemon/{ID or name}/encounters` endpoint to find this information.

  `GET https://pokeapi.co/api/v2/pokemon/pikachu/encounters`

  This request will return all of the areas you can find Pikachu in the Pokémon universe, which can help you on your Pokémon journey.

  Next, we will be covering the different endpoints you can use to find out more about Pokémon!

  ---
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