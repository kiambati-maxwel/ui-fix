// // DOM
// const dateNow = document.querySelector('#dateNow');
// const time = document.querySelector('#time');
// const amPm = document.querySelector('#am-pm');
// const hello = document.querySelector('#hello');

// // show date and time 
// let dateToday;
// function showTime(){
//   let today = new Date(),
//       todayd = today.dateNow(),
//       hour = todayd.getHours(),  
//       min = todayd.getMinutes(),
//       sec = todayd.getSeconds();
//   dateToday = `${todayd.getDate()}/${todayd.getMonth()}/${todayd.getFullYear()}`;
//   info.filter(info => {
//     return info.name === e.name;
//   }).map(sbn => {
//     return sbn.time
//   }).forEach(e => {

//     tt += e;

//   });
//   subTopic.push(e.name);
//   subTopicTime.push({
//     name: e.name,
//     time: tt
//   });
//   tt = null;
// }
//   // --- set am or pm 
//   const amPm = hour >= 12 ? 'PM' : 'AM';

//       // output the time 
//       time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span id="ampm"> ${amPm}</span>`;
      
//       setTimeout(showTime, 1000);
// }

// // function add zero
// function addZero(n){
//   return (parseInt(n, 10) < 10 ? '0': '')+n;
// }


// // function set date now
// function setDateNow (){
//   dateNow.innerText = dateToday;
//   console.log(dateToday);
// }

// // set greating
// function setGreating(){
//   let today = new Date(), hour = today.getHours();
//   if(hour < 15){
//     hello.innerHTML = 'bonjour !';
//   }else{
//     hello.innerText = 'bonsoir !';
//   }
// }

// // run
// showTime();
// setDateNow();
// setGreating();