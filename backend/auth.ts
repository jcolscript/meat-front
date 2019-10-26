import { Response, Request } from 'express';
import { User, users } from './users';

export const authentication = (req: Request, res: Response) => {
  const user: User = req.body;
  if (isValid(user)) {
    const userData: User = users[user.email];
    res.status(200).json({name: userData.name, email: userData.email });
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
