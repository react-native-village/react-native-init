import {EvmChain} from '@moralisweb3/common-evm-utils';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import Moralis from 'moralis';

import {getDemoData} from './request';

dotenv.config();
const {MORALIS_API_KEY} = process.env;

const config = {
  domain: 'www.jscamp.app',
  statement: 'Please sign this message to confirm your identity.',
  uri: 'dapp.joker://',
  timeout: 60,
};

const app = express();
const port = 3000;
const address = '0x638C4c657F80a8A99faeca550B733aaae81174ef';
const chain = EvmChain.ETHEREUM;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/request-message', async (req, res) => {
  const {address, chain, network} = req.body;

  try {
    const message = await Moralis.Auth.requestMessage({
      address,
      chain,
      network,
      ...config,
    });

    res.status(200).json(message);
  } catch (error: any) {
    res.status(400).json({error: error.message});
    console.error(error);
  }
});

app.post('/verify', async (req, res) => {
  try {
    const {message, signature} = req.body;

    const {address, profileId} = (
      await Moralis.Auth.verify({
        message,
        signature,
        networkType: 'evm',
      })
    ).raw;

    const user = {address, profileId, signature};

    // create JWT token
    const token = jwt.sign(user, process.env.AUTH_SECRET ?? '');

    // set JWT cookie
    res.cookie('jwt', token, {
      httpOnly: true,
    });

    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({error: error.message});
    console.error(error);
  }
});

app.get('/authenticate', async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) return res.sendStatus(403); // if the user did not send a jwt token, they are unauthorized

  try {
    const data = jwt.verify(token, process.env.AUTH_SECRET ?? '');
    res.json(data);
  } catch {
    return res.sendStatus(403);
  }
});

app.get('/logout', async (req, res) => {
  try {
    res.clearCookie('jwt');
    return res.sendStatus(200);
  } catch {
    return res.sendStatus(403);
  }
});

app.get('/demo', async (req, res) => {
  try {
    // Get and return the crypto data
    const data = await getDemoData({chain, address});
    res.status(200);
    res.json(data);
  } catch (error: any) {
    // Handle errors
    console.error(error);
    res.status(500);
    res.json({error: error.message});
  }
});

const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
startServer();
