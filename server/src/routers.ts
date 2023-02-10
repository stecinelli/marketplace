// External Dependencies

import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { collections } from './service/database.service';
import log from './logger';
import Products from './model/marketplace-db';

// Global Config

export const router = express.Router();

router.use(express.json());

// GET

router.get('/', async (_req: Request, res: Response) => {
  try {
    const products = (await collections.products?.find({}).toArray()) as Products[];

    res.status(200).send(products);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const product = (await collections.products?.findOne(query)) as Products;

    if (product) {
      res.status(200).send(product);
    }
  } catch (error) {
    res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
  }
});

// POST

router.post('/', async (req: Request, res: Response) => {
  try {
    const newGame = req.body as Products;
    const result = await collections.products?.insertOne(newGame);

    result
      ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
      : res.status(500).send('Failed to create a new game.');
  } catch (error: any) {
    log.error(error);
    res.status(400).send(error.message);
  }
});

// PUT

router.put('/:id', async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const updatedGame: Products = req.body as Products;
    const query = { _id: new ObjectId(id) };

    const result = await collections.products?.updateOne(query, { $set: updatedGame });

    result
      ? res.status(200).send(`Successfully updated game with id ${id}`)
      : res.status(304).send(`Game with id: ${id} not updated`);
  } catch (error: any) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});

// DELETE

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const result = await collections.products?.deleteOne(query);

    if (result && result.deletedCount) {
      res.status(202).send(`Successfully removed game with id ${id}`);
    } else if (!result) {
      res.status(400).send(`Failed to remove game with id ${id}`);
    } else if (!result.deletedCount) {
      res.status(404).send(`Game with id ${id} does not exist`);
    }
  } catch (error: any) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});
