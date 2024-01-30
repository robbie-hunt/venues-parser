function parseTable() {
  var inputHTML = document.getElementById('tableHTML').value;
  var parser = new DOMParser();
  var doc = parser.parseFromString(inputHTML, 'text/html');
  var rows = doc.querySelectorAll('tr');
  var result = '';

  rows.forEach(row => {
    var name = row.querySelector('.name') ? row.querySelector('.name').textContent.trim() : '';
    var type = row.querySelector('.type') ? row.querySelector('.type').textContent.trim() : '';
    var capacity = row.querySelector('.capacity') ? row.querySelector('.capacity').textContent.trim() : '';
    var location = row.querySelector('.location') ? row.querySelector('.location').textContent.trim() : '';
    var genre = row.querySelector('.genre') ? row.querySelector('.genre').textContent.trim() : '';
    var article = row.querySelector('article');
    var url = article ? 'https://app.viberate.com' + article.querySelector('a').getAttribute('href') : '';

    result += `${name};${type};${capacity};${location};${genre};${url}\n`;
  });

  document.getElementById('result').textContent = result;
}