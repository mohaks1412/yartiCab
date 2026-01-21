import bcrypt from 'bcryptjs';

export const users = [
  {
    id: 1,
    username: 'admin',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    id: 2,
    username: 'user',
    password: bcrypt.hashSync('password', 10),
  },
];
