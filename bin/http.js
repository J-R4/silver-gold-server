const app = require('../app');

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`S&G admin app is listening on port http://localhost:`, port));
