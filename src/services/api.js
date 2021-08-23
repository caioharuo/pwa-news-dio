const params = {
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const URL = 'https://stormy-brook-79548.herokuapp.com/api';

async function getNews(subject) {
  return fetch(`${URL}/${subject}`, params)
    .then((res) => res.json())
    .catch((err) => {
      console.log('Ocorreu um erro', err);
    });
}

async function getNewsById(subject, id) {
  return fetch(`${URL}/${subject}/${id}`, params)
    .then((res) => res.json())
    .catch((err) => {
      console.log('Ocorreu um erro', err);
    });
}

const api = {
  getNews,
  getNewsById,
};

export default api;
