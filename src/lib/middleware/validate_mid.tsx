import { NextApiRequest, NextApiResponse } from 'next';
import { ZodSchema } from 'zod';

const validate = (schema: ZodSchema<any>) => {
  return async (req: NextApiRequest, res: NextApiResponse, next: () => void): Promise<void> => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      next();
    } catch (error: any) {
      res.status(400).json({ msg: error.errors });
    }
  };
};

export default validate;
