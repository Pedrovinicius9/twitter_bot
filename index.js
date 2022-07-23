var twit     = require('twit');            // Twitter library
var config   = require('./config.js');     // API tokens

// Return days left to the Major
function getMajorDate() {
  var currentDate   = new Date();                                                                    // Current date
  var majorDate     = new Date('Wed Nov 10 2022 00:00:00 GMT-0300 (Horário Padrão de Brasília)');    // Major date
  var diff          = majorDate.getTime() - currentDate.getTime();                                   // Time difference between the dates (Current date and Major date)
  var remainingDays = Math.ceil(diff / (1000 * 60 * 60 * 24));                                       // Days left to the Major 

  if (remainingDays > 0) {
    return remainingDays; // Return days left 
  } else {
    return 0; // If it's the major's day, return 0 
  }
};

var daysLeft = getMajorDate();
var status = '';

// Edit status to show in tweet
if (daysLeft > 0 && daysLeft != 1) {
  status = `Faltam ${daysLeft} dias para o IEM Rio Major 2022!!!`;
} else if (daysLeft = 1) {
  status = `É AMANHÃ!!! Falta ${daysLeft} dia para o IEM Rio Major 2022!!!`;
} else if (daysLeft = 0) {
  status = 'É HOJE!!! Dia de IEM RIO MAJOR 2022!!! 🔥🔥🔥';
} else if (daysLeft < 0) {
  status = '';
}

// Set time to tweet
var Bot = new twit(config);

if (daysLeft > 0) {
  Bot.post('statuses/update', {
    status: status
  },
  function(err, data, res) {
    console.log('Fail!', data);
  }
  );
}