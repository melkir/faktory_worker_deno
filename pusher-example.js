import { FaktoryClient, FaktoryJob } from './mod.js'

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let client = new FaktoryClient('localhost', 7419, 'passthis')

// If Faktory server requires a password, simply pass it as a third argument to FaktoryClient
// let client = new FaktoryClient('localhost', 7419, 'somepassword')

await client.connect()

// Create job
let job = new FaktoryJob('adder', [
  randomIntFromInterval(1, 10),
  randomIntFromInterval(1, 10)
])
// Push job
await client.push(job)

// Push another job
let job2 = new FaktoryJob('anotherjob', [])
await client.push(job2)

client.close()