// Config
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Home
app.get('/', (req, res) => {
    res.render('index.ejs', { section: 'home' }); 
});


// Other routes 
app.get(':/box:/id', (req, res) =>{
    res.render('hobbies.ejs', { content : content })
})



// Server listen
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
