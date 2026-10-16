const axios = require('axios');

const travelList = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api/trips');
    const trips = response.data;

    res.render('travel', { 
      title: 'Travlr Getaways - Travel',
      trips
    });
  } catch (err) {
    console.log('API error:', err);
    res.render('travel', { 
      title: 'Travlr Getaways - Travel',
      trips: []
    });
  }
};

module.exports = {
  travelList
};

