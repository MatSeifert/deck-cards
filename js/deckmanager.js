const deck = {
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

const getTrainerCardTypeName = (type) => {
    switch(type) {
        // Vintage Trainer Karte
        case 'trainer':
            return 'Trainer'
        case 'special-energy': 
            return 'Spezial-Energie'
        case 'item':
            return 'Item'
        case 'supporter':
            return 'Unterstützer'
        case 'stadium':
            return 'Stadion'
    }
}

const title = document.getElementById('title')
title.appendChild(document.createTextNode(deck['deckName']))

const body = document.getElementById('main')
body.classList.add(deck.deckPrimaryEnergyType)

const pokemonContent = document.getElementById('pokemon-content')
for (const p of deck.deckContent.pokemon) {
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

const trainerContent = document.getElementById('trainer-content')
for (const t of deck.deckContent.trainer) {
    console.log(t.cardName)
    const tNode = document.createElement('div')
    tNode.classList.add('trainer-wrapper')

    const tNodeType = document.createElement('div')
    tNodeType.appendChild(document.createTextNode(getTrainerCardTypeName(t.trainerType)))
    tNodeType.classList.add('trainer-type')
    tNodeType.classList.add(t.trainerType)
    tNode.appendChild(tNodeType)

    const tNodeAmount = document.createElement('div')
    tNodeAmount.classList.add('amount')
    tNodeAmount.appendChild(document.createTextNode(t.amount))
    tNode.appendChild(tNodeAmount)

    const tNodeName = document.createElement('div')
    tNodeName.appendChild(document.createTextNode(t.cardName))
    tNode.appendChild(tNodeName)

    trainerContent.appendChild(tNode)
}

console.log(window.location.href)