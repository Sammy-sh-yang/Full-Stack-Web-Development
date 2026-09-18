import express from "express"; 

const app = express();
const port =3000; 

app.get('/', (req, res) => {
    const today = new Date();
    let day = today.getDay();

    let type = "Weekday";
    let dataType = "Time to work hard!";


    if (day === 0 || day === 6){
    type = "Weekend";
    dataType = "Let's have some fun!";
    }

    res.render('index.ejs',{
        dayType:type,
        dataType:dataType,
    })
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
