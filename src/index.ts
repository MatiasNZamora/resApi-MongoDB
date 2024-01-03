import app from "./app";

app.listen(app.get('port'));
console.log('server on port ', app.get('port'));





// comvierte el codigo y cuando el codigo sea convertido ejecutalo con node.
// "dev": "tsc-watch --onSuccess \"node dist/index.js\" "