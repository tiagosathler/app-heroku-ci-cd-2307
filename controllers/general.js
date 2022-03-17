require('dotenv').config();

const { PORT, ENVIRONMENT, FROM } = process.env
  || { 
    PORT: 3000,
    ENVIRONMENT: 'not defined',
    FROM: 'nod defined',
  };

module.exports = (_req, res, next) => {
  try {
    const { env } = process;
    const html = `
    <h1>Heroku com Docker</h1>
    <h2>Rodando de um Docker</h2>
    <p>PORT: ${PORT}</p>
    <p>ENVIRONMENT: ${ENVIRONMENT}</p>
    <p>FROM: ${FROM}</p>
    <h2>Variáveis de ambiente:</h2>
    <ul>
    ${Object.entries(env).map(([key, value]) => (`<li>${key}: ${value}</li>`)).join('<br>')}
    `;
    return res.status(200).send(html);
  } catch (e) {
    return next(e);
  }
};