import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from "express";
import * as multer from "multer";


async function bootstrap() {
  const { APP_PORT } = process.env;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/uploads", express.static("uploads"));
  app.setGlobalPrefix('api');
  app.enableCors({ origin: ['http://localhost:3000'], credentials: true });
  app.useGlobalPipes(new ValidationPipe());
  app.set('trust proxy', 'loopback');

  try {
    await app.listen(APP_PORT, () =>
      console.log(`Running on Port ${APP_PORT}`),
    );
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
