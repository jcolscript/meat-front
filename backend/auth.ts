import { Response, Request } from 'express';
import { User, users } from './users';
import * as jwt from 'jsonwebtoken';
import { config } from './config';

export const authentication = (req: Request, res: Response) => {
  const user: User = req.body;
  if (isValid(user)) {
    const userData: User = users[user.email];
    const token = jwt.sign({sub: userData.email, iss: 'meat-api'}, config.secret);
    res.status(200).json({name: userData.name, email: userData.email, accessToken: token });
  } else {
    res.status(403).json({message: 'Dados invalidos'});
  }
};

function isValid(user: User): boolean {
  if(!user) {
    return false;
  }
  const dbUser = users[user.email];
  return dbUser !== undefined && dbUser.matches(user);
}
