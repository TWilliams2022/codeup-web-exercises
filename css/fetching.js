fetch(`https://www.youtube.com`)
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log("error"))