const express = require('express');
const app = express();
const cors = require('cors');
const { response } = require('express');
const port = process.env.PORT || 5000;

app.use(cors());

const places = require('./Data/places.json');
const hotels = require('./Data/hotels.json');
const maps = require('./Data/maps.json');


app.get('/', (req, res) => {
    res.send('Travel Dude API is Running')
})

app.get('/maps', (req, res) => {
    res.send(maps);
})

app.get('/maps/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedMap = maps.find(map => map.place_id === id);
    res.send(selectedMap);
})

app.get('/places', (req, res) => {
    res.send(places);
})

app.get('/places/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedPlace = places.find(place => place.id === id);
    res.send(selectedPlace);
})

app.get('/hotels', (req, res) => {
    res.send(hotels);
})

app.get('/hotels/:id', (req, res) => {
    const id  = req.params.id;
    const selectedPlaceHotels = hotels.filter(hotel => hotel.place_id === id);
    res.send(selectedPlaceHotels);
})

app.listen(port, () => {
    console.log("Travel Dude Server is Running on Port", port);
})
