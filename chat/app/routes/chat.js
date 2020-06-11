module.exports = (application) => {
  application.post('/chat', (req, res) => application.app.controllers.chat.chat$(application, req, res))
  application.get('/chat', (req, res) => application.app.controllers.chat.chat$(application, req, res))
};
