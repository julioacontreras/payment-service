import dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV}`})

import '@/infrastructure/logger'
import '@/infrastructure/serverHttpFastify'
import '@/infrastructure/payment'

import { startApp } from '@/application'

startApp()
