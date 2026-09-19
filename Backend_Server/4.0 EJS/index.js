import express from "express"; 

const app = express()
const port = 3000

app.get('/', (req, res) => {

    const today = new Date();
    const day = today.getDay();

    let wDays = "Weekdays";
    let msg = "Let's work harder!";


    if (day === 0 || day === 6){
        wDays = "Weekends";
        msg = "Let's play!!";
         }

  res.render('index.ejs',{
    dayType: wDays,
    advise: msg,
  });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})