import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { collections } from './service/database.service';
import log from './logger';
import Products from './model/marketplace-db';
import validate from './middleware/validateRequest';
import { createUserSchema } from './schema/user.schema';
import { createUserHandler } from './controller/user.controller';

// Global Config

export const router = express.Router();

router.use(express.json());

// GET Product

router.get('/products', async (_req: Request, res: Response) => {
  try {
    const products = (await collections.products?.find({}).toArray()) as Products[];

    res.status(200).send(products);
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

router.get('/products/:id', async (req: Request, res: Response) => {
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

// POST Product

router.post('/products', async (req: Request, res: Response) => {
  try {
    const newProduct = req.body as Products;
    const result = await collections.products?.insertOne(newProduct);

    result
      ? res.status(201).send(`Successfully created a new product with id ${result.insertedId}`)
      : res.status(500).send('Failed to create a new product.');
  } catch (error: any) {
    log.error(error);
    res.status(400).send(error.message);
  }
});

// PUT Product

router.put('/products/:id', async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const updatedProduct: Products = req.body as Products;
    const query = { _id: new ObjectId(id) };

    const result = await collections.products?.updateOne(query, { $set: updatedProduct });

    result
      ? res.status(200).send(`Successfully updated product with id ${id}`)
      : res.status(304).send(`Product with id: ${id} not updated`);
  } catch (error: any) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});

// DELETE Product

router.delete('/products/:id', async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const result = await collections.products?.deleteOne(query);

    if (result && result.deletedCount) {
      res.status(202).send(`Successfully removed product with id ${id}`);
    } else if (!result) {
      res.status(400).send(`Failed to remove product with id ${id}`);
    } else if (!result.deletedCount) {
      res.status(404).send(`Product with id ${id} does not exist`);
    }
  } catch (error: any) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});


// POST User (register user)
router.post('/users', validate(createUserSchema), createUserHandler);

// POST Sessions (Login)
// GET Sessions (check login)
// DELETE Sessions (Logout)
