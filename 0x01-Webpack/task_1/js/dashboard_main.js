import $ from 'jquery';
let _ = require('lodash');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
  let times = $('#count').html() || 0;
  times++;
  $('#count').html(`${times} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));

