import { Worker } from 'bullmq';

const connection = { url: process.env.REDIS_URL };

new Worker('image:process', async job => {
  console.log('process image', job.data);
}, { connection });

new Worker('digest:email', async job => {
  console.log('send digest', job.data);
}, { connection });

console.log('Worker started');
