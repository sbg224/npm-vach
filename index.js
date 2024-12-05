import dotenv from "dotenv";
import * as cowsay from "cowsay";

dotenv.config(); // Charge les variables depuis .env

const name = process.env.NAME;
const campus = process.env.CAMPUS;

const output = cowsay.say({ text: `Hello I'm  ${name}  from  ${campus}` });

console.log(output);