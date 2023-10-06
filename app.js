const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const app = express();



const connection = require('./db'); // Import your database connection module
const planRoutes = require('./routes/planRoutes');
const eventsRoutes = require('./routes/eventsRoutes');
const volunterRoutes = require('./routes/volunteerRoutes');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));


app.use('/plan', planRoutes);
app.use('/events', eventsRoutes);
app.use('/volunteer', volunterRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
