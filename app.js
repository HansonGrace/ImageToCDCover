const express = require('express')


app = express()

app.get('/', (req, res) => {
res.send('hello world');

});
//create localhost to run js file
app.listen(3000, () =>{
    //callback function
console.log('listening')
});