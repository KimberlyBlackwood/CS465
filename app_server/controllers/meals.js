const meals = (req, res) => {
  res.render('meals', { title: 'Meals at Travlr Getaways' });
};

module.exports = { meals };

