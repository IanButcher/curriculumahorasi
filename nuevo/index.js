const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs', { section: 'home' }); // Pass 'home' as the section to highlight in the navigation
});

app.get('/location', (req, res) =>{
    res.render('location.ejs')
})

app.get('/post/:id', (req, res) => {
    const postId = req.params.id;
    res.render('post', { postId });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
