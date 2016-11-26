import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/',(req, res) => {
  var a=+req.query.a;
  var b=+req.query.b;
  if (!(/^\d+$/.test(a))){
    a=0;
  }
  if (!(/^\d+$/.test(b))){
    b=0;
  }
  //try {a=(+a);}
  //catch(a=0;}
    //try {b=(+b);}
    //catch {b=0;}
  const summa=a+b;
  res.send(summa.toString());
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
