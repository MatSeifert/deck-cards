const deckContent = {
    "deckName": "Glurak",
    "deckPatron": "charizard",
    "deckType":"vintage",
    "deckPrimaryEnergyType": "fire",
    "deckSecondaryEnergyType": "electric",
    "deckSleeves": "giratina",
    "deckContent": {
        "pokemon": [
            {
                "cardName": "Glumanda",
                "cardEnergyType": "fire",
                "amount": 3
            },
            {
                "cardName": "Glutexo",
                "cardEnergyType": "fire",
                "amount": 2
            },
            {
                "cardName": "Glurak",
                "cardEnergyType": "fire",
                "amount": 1
            },
            {
                "cardName": "Vulpix",
                "cardEnergyType": "fire",
                "amount": 2
            },
            {
                "cardName": "Vulnona",
                "cardEnergyType": "fire",
                "amount": 1
            },
            {
                "cardName": "Magmar",
                "cardEnergyType": "fire",
                "amount": 1
            },
            {
                "cardName": "Pikachu",
                "cardEnergyType": "electric",
                "amount": 2
            },
            {
                "cardName": "Raichu",
                "cardEnergyType": "electric",
                "amount": 1
            },
            {
                "cardName": "Voltobal",
                "cardEnergyType": "electric",
                "amount": 2
            },
            {
                "cardName": "Lektrobal",
                "cardEnergyType": "electric",
                "amount": 1
            },
            {
                "cardName": "Elektek",
                "cardEnergyType": "electric",
                "amount": 1
            },
            {
                "cardName": "Blitza",
                "cardEnergyType": "electric",
                "amount": 1
            },
            {
                "cardName": "Evoli",
                "cardEnergyType": "normal",
                "amount": 2
            }
        ],
        "trainer": [
            {
                "cardName": "Bill",
                "trainerType": "trainer",
                "amount": 2
            },
            {
                "cardName": "Trank",
                "trainerType": "trainer",
                "amount": 2
            },
            {
                "cardName": "Tausch",
                "trainerType": "trainer",
                "amount": 2
            },
            {
                "cardName": "Windhauch",
                "trainerType": "trainer",
                "amount": 2
            },
            {
                "cardName": "Energieabsauger",
                "trainerType": "trainer",
                "amount": 1
            },
            {
                "cardName": "Pokéball",
                "trainerType": "trainer",
                "amount": 1
            },
            {
                "cardName": "Pokédex",
                "trainerType": "trainer",
                "amount": 1
            },
            {
                "cardName": "Energiezugewinnung",
                "trainerType": "trainer",
                "amount": 1
            },
            {
                "cardName": "Supertrank",
                "trainerType": "trainer",
                "amount": 1
            },
            {
                "cardName": "Energiesuche",
                "trainerType": "trainer",
                "amount": 1
            },
            {
                "cardName": "Schlaf",
                "trainerType": "trainer",
                "amount": 1
            },
            {
                "cardName": "Wiederverwertung",
                "trainerType": "trainer",
                "amount": 1
            },
            {
                "cardName": "PlusPower",
                "trainerType": "trainer",
                "amount": 1
            },
            {
                "cardName": "Spieler",
                "trainerType": "trainer",
                "amount": 1
            },
            {
                "cardName": "Professor Eich",
                "trainerType": "trainer",
                "amount": 1
            },
            {
                "cardName": "Hyperheiler Energie",
                "trainerType": "special-energy",
                "amount": 1
            }
        ],
        "energy": {
            "fire": 10,
            "electric": 10
        }
    }
}

const title = document.getElementById('title')
title.appendChild(document.createTextNode(deckContent['deckName']))

const body = document.getElementById('main')
body.classList.add(deckContent.deckPrimaryEnergyType)

const pokemonContent = document.getElementById('pokemon-content')
for (const p of deckContent.deckContent.pokemon) {
    const pNode = document.createElement('div')
    pNode.classList.add('pokemon-wrapper')

    const pNodeEnergy = document.createElement('div')
    const pNodeEnergyImg = document.createElement('img')
    pNodeEnergyImg.setAttribute('src', `img/energy_${p.cardEnergyType}.svg`)
    pNodeEnergy.appendChild(pNodeEnergyImg)
    pNodeEnergy.classList.add('energy')
    pNode.appendChild(pNodeEnergy)

    const pNodeAmount = document.createElement('div')
    pNodeAmount.classList.add('amount')
    pNodeAmount.appendChild(document.createTextNode(p.amount))
    pNode.appendChild(pNodeAmount)

    const pNodeName = document.createElement('div')
    pNodeName.appendChild(document.createTextNode(p.cardName))
    pNode.appendChild(pNodeName)

    pokemonContent.appendChild(pNode)
}

console.log(window.location.href)