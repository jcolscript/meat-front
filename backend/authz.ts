import { Request, Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from './config';

export const authorization = (req: Request, res: Response, next: NextFunction) => {
  const token = extractToken(req);
  if (!token) {
    res.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"');
    res.status(401).json({message: 'Você precisa se autenticar'});
  } else {
    jwt.verify(token, config.secret, (error, decoded) => {
      if (decoded) {
        next();
      } else {
        res.status(403).json({message: 'Não autorizado'});
      }
    });
  }
};

function extractToken(req: Request): string {
  let token;
  if (req.headers && req.headers.authorization) {
    const parts: string[] = req.headers.authorization.split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      token = parts[1];
    }
  }
  return token;
}
