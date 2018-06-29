const http = new XMLHttpRequest();
const host = 'http://localhost:3000';

function createRows(data) {
  const tbody = document.querySelector('#books');
  tbody.innerHTML = '';

  data.forEach((book) => {
    let tr = document.createElement('tr');

    let td_author = document.createElement('td');
    td_author.innerText = book.aut_name;

    let td_title = document.createElement('td');
    td_title.innerText = book.book_name;

    let td_category = document.createElement('td');
    td_category.innerText = book.cate_descrip;

    let td_publisher = document.createElement('td');
    td_publisher.innerText = book.pub_name;

    let td_price = document.createElement('td');
    td_price.innerText = book.book_price;

    tr.appendChild(td_author);
    tr.appendChild(td_title);
    tr.appendChild(td_category);
    tr.appendChild(td_publisher);
    tr.appendChild(td_price);
    tbody.appendChild(tr);
  });
}

function getData(apiRoute, callback) {
  http.open('GET', `${host}${apiRoute}`, false);
  http.onload = () => {
    const result = JSON.parse(http.responseText);
    callback(result.books);
  };

  http.send();
}

function consoleResponse(response) {
  console.log(response);
}

function getCategory(e) {
  const category = e.target.dataset.category;

  getData(`/api/books/full?category=${category}`, consoleResponse);
  getData(`/api/books/full?category=${category}`, createRows);

  /*
  http.open('GET', `${host}/api/books/full?category=${category}`, true);
  http.onload = () => {
    const result = JSON.parse(http.responseText);
    createRows(result.books);
  };
  http.send();
  */
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', getCategory);
});

/*
http.open('GET', `${host}/api/books/full`, true);
http.onload = () => {
  const result = JSON.parse(http.responseText);
  createRows(result.books);
};
http.send();
*/

getData(`/api/books/full`, createRows);