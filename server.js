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
    }
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

