import { createRequire } from 'module';

const require = createRequire(import.meta.url);

//const { addCJS } = require("./cjExemple.cjs");

const stytch = require('stytch');

const client = new stytch.Client({
  project_id: 'project-test-c152e187-5e9a-4bd8-9089-eab39d7897da',
  secret: 'secret-test-70KI_FB36mKk0gNDBnWl8hKzOL2RkCew2ZQ=',
});

const params = {
  password: "Eceleite",
};

client.passwords.strengthCheck(params)
  .then(resp => { console.log(resp) })
  .catch(err => { console.log(err) });