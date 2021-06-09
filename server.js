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
    'styles p': {
        'age': 46,
        'birthName': 'David R. Styles',
        'birthLocation': 'New York, New York'
    },
    'jam master jay': {
        'age': 55,
        'birthName': 'Jason William Mizell',
        'birthLocation': 'New York, New York'
    },
    'darryl mcdaniels': {
        'age': 56,
        'birthName': 'Darryl Matthews McDaniels',
        'birthLocation': 'New York, New York'
    },
    'joseph simmons': {
        'age': 56,
        'birthName': 'Joseph Ward Simmons',
        'birthLocation': 'New York, New York'
    },
    'rob base': {
        'age': 53,
        'birthName': 'Robert Ginyard',
        'birthLocation': 'New York, New York'
    },
    'treach': {
        'age': 50,
        'birthName': 'Anthony Criss',
        'birthLocation': 'New York, New York'
    },
    'vin rock': {
        'age': 50,
        'birthName': 'Vincent Brown',
        'birthLocation': 'New York, New York'
    },
    'guru': {
        'age': 59,
        'birthName': 'Keith Edward Elam',
        'birthLocation': 'New York, New York'
    },
    'eve': {
        'age': 52,
        'birthName': 'Eve Jihan Cooper',
        'birthLocation': 'New York, New York'
    },
    'ja rule': {
        'age': 54,
        'birthName': 'Jeffrey Bruce Atkins',
        'birthLocation': 'New York, New York'
    },
    'mc serch': {
        'age': 53,
        'birthName': 'Michael Berrin',
        'birthLocation': 'New York, New York'
    },
    'pete nice': {
        'age': 54,
        'birthName': 'Peter J. Nash',
        'birthLocation': 'New York, New York'
    },
    'lil kim': {
        'age': 46,
        'birthName': 'Kimberly Denise Jones',
        'birthLocation': 'New York, New York'
    },
    'foxy brown': {
        'age': 42,
        'birthName': 'Inga DeCarlo Fung Marchand',
        'birthLocation': 'New York, New York'
    },
    'everlast': {
        'age': 51,
        'birthName': 'Erik Francis Schrody',
        'birthLocation': 'New York, New York'
    },
    'danny boy': {
        'age': 52,
        'birthName': 'Daniel O\'Connor',
        'birthLocation': 'New York, New York'
    },
    'dray': {
        'age': 50,
        'birthName': 'Andre Weston',
        'birthLocation': 'New York, New York'
    },
    'skoob': {
        'age': 50,
        'birthName': 'William Hines',
        'birthLocation': 'New York, New York'
    },
    'mc lyte': {
        'age': 50,
        'birthName': 'Lana Michele Moorer',
        'birthLocation': 'New York, New York'
    },
    'wyclef jean': {
        'age': 51,
        'birthName': 'Nel Ust Wyclef Jean',
        'birthLocation': 'Croix-des-Bouquets, Haiti'
    },
    'mase': {
        'age': 45,
        'birthName': 'Mason Durell Betha',
        'birthLocation': 'New York, New York'
    },
    'pete rock': {
        'age': 50,
        'birthName': 'Peter O. Phillips',
        'birthLocation': 'New York, New York'
    },
    'cl smooth': {
        'age': 52,
        'birthName': 'Corey Brent Penn',
        'birthLocation': 'New York, New York'
    },
    'lauryn hill': {
        'age': 45,
        'birthName': 'Lauryn Noelle Hill',
        'birthLocation': 'New York, New York'
    },
    'pras': {
        'age': 48,
        'birthName': 'Prakazrel Samuel Michel',
        'birthLocation': 'Irvington, New Jersey'
    },
    'doitall': {
        'age': 49,
        'birthName': 'Dupre Kelly',
        'birthLocation': 'Newark, New Jersey'
    },
    'mr. funke': {
        'age': 48,
        'birthName': 'Al\'Terik Wardrick',
        'birthLocation': 'Newark, New Jersey'
    },
    'biz markie': {
        'age': 56,
        'birthName': 'Marcel Theo Hall',
        'birthLocation': 'New York, New York'
    },
    'grand puba': {
        'age': 54,
        'birthName': 'Maxwell Dixon',
        'birthLocation': 'New York, New York'
    },
    'sadat x': {
        'age': 52,
        'birthName': 'Derek Murphy',
        'birthLocation': 'New York, New York'
    },
    'lord jamar': {
        'age': 52,
        'birthName': 'Lorenzo Dechalus',
        'birthLocation': 'New York, New York'
    },
    'killah priest': {
        'age': 50,
        'birthName': 'Walter Reed',
        'birthLocation': 'New York, New York'
    },
    'big sean': {
        'age': 33,
        'birthName': 'Sean Michael-Leonard Anderson',
        'birthLocation': 'Detroit, Michigan'
    },
    'bizarre': {
        'age': 44,
        'birthName': 'Rufus Arthur Johnson',
        'birthLocation': 'Detroit, Michigan'
    },
    'black milk': {
        'age': 38,
        'birthName': 'Curtis Eugene Cross',
        'birthLocation': 'Detroit, Michigan'
    },
    'boss': {
        'age': 51,
        'birthName': 'Lichelle Laws',
        'birthLocation': 'Detroit, Michigan'
    },
    'danny brown': {
        'age': 39,
        'birthName': 'Daniel Dewan Sewell',
        'birthLocation': 'Detroit, Michigan'
    },
    'cha cha': {
        'age': 40,
        'birthName': 'Parris Lynell Fluellen',
        'birthLocation': 'Detroit, Michigan'
    },
    'elzhi': {
        'age': 42,
        'birthName': 'Jason Powers',
        'birthLocation': 'Detroit, Michigan'
    },
    'eminem': {
        'age': 48,
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': 'Detroit, Michigan'
    },
    'esham': {
        'age': 48,
        'birthName': 'Esham Attica Smith',
        'birthLocation': 'Detroit, Michigan'
    },
    'fatt father': {
        'age': 50,
        'birthName': 'Shabazz Ford',
        'birthLocation': 'Detroit, Michigan'
    },
    'feloni': {
        'age': 39,
        'birthName': 'Trish Best',
        'birthLocation': 'Detroit, Michigan'
    },
    'kash doll': {
        'age': 30,
        'birthName': 'Arkeisha Antoinette Knight',
        'birthLocation': 'Detroit, Michigan'
    },
    'king gordy': {
        'age': 43,
        'birthName': 'Waverly Walter Alford III',
        'birthLocation': 'Detroit, Michigan'
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

