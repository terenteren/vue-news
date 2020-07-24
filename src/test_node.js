const schedule = require('node-schedule');

const aa = '1시 10분';
 
const j = schedule.scheduleJob('* * * * * *', function(){
  console.log('매 10초에 실행');
});