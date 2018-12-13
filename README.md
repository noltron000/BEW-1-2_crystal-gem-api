# Steven Universe Gem API
This API's goal is to serve information about gem characters in the Steven Universe cartoon series.

> What's Steven Universe?
> see http://steven-universe.wikia.com/wiki/Steven_Universe_Wiki

## Using the Website
The API has a modest frontend for ease of use. The website is hosted on <a href='https://crystal-gem-api.herokuapp.com/'>Heroku</a>.

### Overview

| Route              | Functionality                                 |
|:------------------:|:----------------------------------------------|
| `/`                | Displays basic information                    |
| `/gem`             | Displays all gems                             |
| `/gem/json`        | Displays all gems in `JSON` format            |
| `/gem/new`         | Displays new gem form                         |
| `/gem/:id`         | Displays one gem's detail                     |
| `/gem/:id/json`    | Displays one gem's detail in `JSON` format    |
| `/gem/:id/edit`    | Displays gem edit form                        |
| `/fusion`          | Displays all fusions                          |
| `/fusion/json`     | Displays all fusions in `JSON` format         |
| `/fusion/new`      | Displays new fusion form                      |
| `/fusion/:id`      | Displays one fusion's detail                  |
| `/fusion/:id/json` | Displays one fusion's detail in `JSON` format |
| `/fusion/:id/edit` | Displays fusion edit form                     |

As of right now, there are a few basic routes that you can visit, including...

## Definitions
***What are gems?***
*Gems* are metaphysical beings, and their form is projected from the heart of their existance - their jewel. Unlike people, gems can die many times, don't need to sleep, eat or breath, and have special weapons and secret powers.

***What are fusions?***
*Fusions* are super-powerful combinations of gems, achieved through an extraordinary connection. Their mind and body form into one.