
const {envs} = require('./config/env.js')
const {startServer}=  require('./server/server.js')

const main = () => {
startServer({
    port:envs.PORT,
    public_path:envs.PUBLIC_PATH,
  });
};

// self-summoned agnostic function
// adnostic because it has no name
// self-summoned because we execute it it with the parentheses
(async () => {
    main();
  })();
  