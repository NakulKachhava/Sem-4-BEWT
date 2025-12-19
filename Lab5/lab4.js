const url = "https://www.google.com/search?q=wordpress&sourceid=chrome&ie=UTF-8"

const urlobj = new URL(url);

console.log("Protocol: "+urlobj.protocol);

console.log("Pathname: "+urlobj.pathname);

console.log("Hostname: "+urlobj.hostname);

console.log("Query Parameters: "+urlobj.searchParams);



