const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());

let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 27,
        'birthName': 'Chancellor Jonathan Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 26,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    },
    'method man': {
        'age': 50,
        'birthName': 'Clifford Smith Jr.',
        'birthLocation': 'Hempstead, New York'
    },
    'redman': {
        'age': 50,
        'birthName': 'Reginald Noble',
        'birthLocation': 'Newark, New Jersey'
    },
    'masta killa': {
        'age': 51,
        'birthName': 'Jamel Irief',
        'birthLocation': 'Brooklyn, New York'
    },
    'ol dirty bastard': {
        'age': 52,
        'birthName': 'Russell Tyrone Jones',
        'birthLocation': 'New York, New York'
    },
    'rza': {
        'age': 52,
        'birthName': 'Robert Fitzgerald Diggs',
        'birthLocation': 'New York, New York'
    },
    'gza': {
        'age': 54,
        'birthName': 'Gary Earl Grice',
        'birthLocation': 'New York, New York'
    },
    'raekwon': {
        'age': 50,
        'birthName': 'Corey Woods',
        'birthLocation': 'Brooklyn, New York'
    },
    'ghostface killah': {
        'age': 51,
        'birthName': 'Dennis David Coles',
        'birthLocation': 'Staten Island, New York'
    },
    'inspectah deck': {
        'age': 50,
        'birthName': 'Jason Richard Hunter',
        'birthLocation': 'Staten Island, New York'
    },
    'u-god': {
        'age': 50,
        'birthName': 'Lamont Jody Hawkins',
        'birthLocation': 'New York, New York'
    },
    'cappadonna': {
        'age': 52,
        'birthName': 'Darryl Hill',
        'birthLocation': 'New York, New York'
    },
    'notorious b.i.g.': {
        'age': 48,
        'birthName': 'Christopher George Latore Wallace',
        'birthLocation': 'New York, New York'
    },
    'nas': {
        'age': 47,
        'birthName': 'Nasir bin Olu Dara Jones',
        'birthLocation': 'New York, New York'
    },
    'erick sermon': {
        'age': 52,
        'birthName': 'Erick Sermon',
        'birthLocation': 'New York, New York'
    },
    'parrish mic doc': {
        'age': 52,
        'birthName': 'Parrish J. Smith',
        'birthLocation': 'New York, New York'
    },
    'eric b.': {
        'age': 57,
        'birthName': 'Louis Eric Barrier',
        'birthLocation': 'New York, New York'
    },
    'rakim': {
        'age': 57,
        'birthName': 'William Michael Griffin Jr.',
        'birthLocation': 'New York, New York'
    },
    'chuck d': {
        'age': 60,
        'birthName': 'Carlton Douglas Ridenhour',
        'birthLocation': 'New York, New York'
    },
    'flavor flav': {
        'age': 61,
        'birthName': 'William Jonathan Drayton Jr.',
        'birthLocation': 'New York, New York'
    },
    'mike d': {
        'age': 55,
        'birthName': 'Michael Louis Diamond',
        'birthLocation': 'New York, New York'
    },
    'mca': {
        'age': 56,
        'birthName': 'Adam Nathaniel Yauch',
        'birthLocation': 'New York, New York'
    },
    'ad-rock': {
        'age': 54,
        'birthName': 'Adam Keefe Horovitz',
        'birthLocation': 'New York, New York'
    },
    'krs-one': {
        'age': 55,
        'birthName': 'Lawrence Parker',
        'birthLocation': 'New York, New York'
    },
    'd-nice': {
        'age': 50,
        'birthName': 'Derrick Jones',
        'birthLocation': 'New York, New York'
    },
    'big daddy kane': {
        'age': 52,
        'birthName': 'Antonio Hardy',
        'birthLocation': 'New York, New York'
    },
    'slick rick': {
        'age': 55,
        'birthName': 'Richard Martin Lloyd Walters',
        'birthLocation': 'New York, New York'
    },
    'q-tip': {
        'age': 50,
        'birthName': 'Jonathan William Davis',
        'birthLocation': 'New York, New York'
    },
    'phife dawg': {
        'age': 50,
        'birthName': 'Malik Izaak Taylor',
        'birthLocation': 'New York, New York'
    },
    'ali shaheed muhammad': {
        'age': 50,
        'birthName': 'Ali Shaheed Muhammad',
        'birthLocation': 'New York, New York'
    },
    'jarobi white': {
        'age': 49,
        'birthName': 'Jarobi White',
        'birthLocation': 'New York, New York'
    },
    'mf grimm': {
        'age': 50,
        'birthName': 'Percy Carey',
        'birthLocation': 'New York, New York'
    },
    'kool g rap': {
        'age': 52,
        'birthName': 'Nathaniel Thomas Wilson',
        'birthLocation': 'New York, New York'
    },
    'll cool j': {
        'age': 52,
        'birthName': 'James Todd Smith',
        'birthLocation': 'Bay Shore, New York'
    },
    'jay-z': {
        'age': 51,
        'birthName': 'Shawn Corey Carter',
        'birthLocation': 'New York, New York'
    },
    '50 cent': {
        'age': 45,
        'birthName': 'Curtis James Jackson III',
        'birthLocation': 'New York, New York'
    },
    'dmx': {
        'age': 50,
        'birthName': 'Earl Simmons',
        'birthLocation': 'New York, New York'
    },
    'busta rhymes': {
        'age': 48,
        'birthName': 'Trevor George Smith Jr.',
        'birthLocation': 'New York, New York'
    },
    'havoc': {
        'age': 46,
        'birthName': 'Kejuan Waliek Muchita',
        'birthLocation': 'New York, New York'
    },
    'prodigy': {
        'age': 46,
        'birthName': 'Albert Johnson',
        'birthLocation': 'New York, New York'
    },
    'fat joe': {
        'age': 50,
        'birthName': 'Joseph Antonio Cartagena',
        'birthLocation': 'New York, New York'
    },
    'big l': {
        'age': 46,
        'birthName': 'Lemont Coleman',
        'birthLocation': 'New York, New York'
    },
    'big pun': {
        'age': 49,
        'birthName': 'Christopher Lee Rios',
        'birthLocation': 'New York, New York'
    },
    'p. diddy': {
        'age': 51,
        'birthName': 'Sean Combs',
        'birthLocation': 'New York, New York'
    },
    'jadakiss': {
        'age': 46,
        'birthName': 'Jason Terrance Phillips',
        'birthLocation': 'New York, New York'
    },
    'sheek louch': {
        'age': 44,
        'birthName': 'Sean Divine Jacobs',
        'birthLocation': 'New York, New York'
    },
    'chuck d': {
        'age': 60,
        'birthName': 'Carlton Douglas Ridenhour',
        'birthLocation': 'New York, New York'
    },
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/api/rappers/:rapperName', (req, res) => {
    const rapName = req.params.rapperName.toLowerCase()
    if (rappers[rapName]) {
        res.json(rappers[rapName])  
    } else {
        res.json(rappers['dylan'])   
    }
    
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});

