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

