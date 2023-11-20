// Config
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Home
app.get('/', (req, res) => {
    const now = new Date();
    const currentHour = now.getHours();
    const isNight = currentHour < 6 || currentHour >= 18;
    res.render('index.ejs', { nightMode: isNight }); 
});


// Tools root
app.get('/tools', (req, res) =>{
    const content = {
        title: 'Tools',
        subtitle: '',
        numberOfCards: 8,
        boxes: [
            {
                title: 'HTML',
                text: 'Hypertext markup language',
                image: '<i class="fa-brands fa-html5 fa-6x" style="color: #e34c26;"></i>',
                percentage: 90,
                color: '#e34c26',
            },
            {
                title: 'CSS',
                text: 'Stylesheet language',
                image:'<i class="fa-brands fa-css3-alt fa-6x" style="color: #264de4;"></i>',
                percentage: 65,
                color: '#264de4',                
            },
            {
                title: 'Bootstrap',
                text: 'The CSS most known framework',
                image: '<i class="fa-brands fa-bootstrap fa-5x" style="color: #602C50;"></i>',
                percentage: 60,
                color: '#602C50',
            },
            {
                title: 'JavaScript',
                text: 'One of the most used programing language',
                image: '<i class="fa-brands fa-square-js fa-6x" style="color: #f0db4f;"></i>',
                percentage: 85,
                color: '#f0db4f',
            },
            {
                title: 'Node.js',
                text: 'The backend framework for JavaScript',
                image: '<i class="fa-brands fa-node-js fa-6x" style="color: #3C873A;"></i>',
                percentage: 30,
                color: '#3C873A',
            },
            {
                title: 'Express',
                text: 'The node library to create and configurate servers!',
                image: '<i class="fa-solid fa-circle-nodes fa-6x"></i>',
                percentage: 70,
                color: '#000000',
            },
            {
                title: 'Git & Github',
                text: 'The most popular version and repositories manager',
                image: '<i class="fa-brands fa-git-alt fa-6x" style="color: #F1502F;"></i>',
                percentage: 50,
                color: '#F1502F',
            },
            {
                title: 'Python',
                text: 'One of the most used programing languages',
                image: '<i class="fa-brands fa-python fa-6x" style="color: #4B8BBE;"></i>',
                percentage: 65,
                color: '#4B8BBE',
            }

        ],
    }
    res.render('tools.ejs', { content : content })
})

app.get('/courses', (req, res)=>{
    const contentTwo = {
        boxes : [{
            title: 'Python',
            text: 'One of the most used programing languages',
            image: '<i class="fa-brands fa-python fa-6x" style="color: #4B8BBE;"></i>',
            percentage: 65,
            color: '#4B8BBE',
        }]
    }
    res.render('courses.ejs', {content: contentTwo})
})

// Server listen
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
