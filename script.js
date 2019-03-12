function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(status)
  .then(json)
  .then(function(data) {
    console.log('Request succeeded', data);
    let arrUsername = data.map(a => a.username);
    arrUsername.sort((a, b) => a.length - b.length);
    document.getElementById("fetchdata").innerHTML = arrUsername.join("<br>");
  }).catch(function(error) {
    console.log('Request failed', error);
  });
  
const req = new XMLHttpRequest(); 
req.open('GET','https://jsonplaceholder.typicode.com/users'); 
req.onload = function () { 
    const arrUser = JSON.parse(req.response);
    let arrEmail = arrUser.map(a => a.email);
    arrEmail.sort();
    if (req.status == 200) { 
      console.log ('Request succeeded', req.responseText);
      document.getElementById("output").innerHTML = arrEmail.join("<br>");
    } else { 
      console.log('ERROR', req.statusText); 
    } 
};
req.onerror = function () { 
    console.log('Network Error'); 
}; 
req.send(); 
