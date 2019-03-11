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
    let username = ""
    for(i =0; i < arrUsername.length; i++) {
      username += arrUsername[i] + "<br>";
  }
  document.getElementById("fetchdata").innerHTML = username; 
  }).catch(function(error) {
    console.log('Request failed', error);
  });
  
const req = new XMLHttpRequest(); 
req.open('GET','https://jsonplaceholder.typicode.com/users'); 
req.onload = function () { 
    const data = JSON.parse(req.response);
    let arrEmail = data.map(a => a.email);
    arrEmail.sort();
    let txt = "";
    if (req.status == 200) { 
        console.log (req.responseText);
        for(i =0; i < arrEmail.length; i++) {
            txt += arrEmail[i] + "<br>";
        }
        document.getElementById("output").innerHTML = txt; 
    } else { 
        console.log('ERROR', req.statusText); 
    } 
};
req.onerror = function () { 
    console.log('Network Error'); 
}; 
req.send(); 
