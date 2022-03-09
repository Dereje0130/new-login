const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/new-login'

));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/new-login/'}),
);
app.listen(process.env.PORT || 8080);