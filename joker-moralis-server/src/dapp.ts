import dotenv from 'dotenv'
import { EvmChain } from '@moralisweb3/common-evm-utils'
import express from 'express'
import Moralis from 'moralis'
import { getDemoData } from './request'
import cors from 'cors'

dotenv.config()
const {MORALIS_API_KEY} = process.env

const app = express()
const port = 3000
const address = "0x638C4c657F80a8A99faeca550B733aaae81174ef"
const chain = EvmChain.ETHEREUM

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/demo", async (req, res) => {
  try {
    // Get and return the crypto data
    const data = await getDemoData({chain, address})
    res.status(200)
    res.json(data)
  } catch (error: any) {
    // Handle errors
    console.error(error)
    res.status(500)
    res.json({ error: error.message })
  }
})

const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}
startServer()
