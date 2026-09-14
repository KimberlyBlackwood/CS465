const news = (req, res) => {
  res.render('news', { title: 'News at Travlr Getaways' });
};

module.exports = { news };

