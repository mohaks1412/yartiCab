import { users } from '@/data/users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const SECRET_KEY = process.env.JWT_SECRET || 'local_secret_key';

export async function POST(req) {
  const { username, password } = await req.json();

  const user = users.find(u => u.username === username);
  if (!user) {
    return new Response(JSON.stringify({ error: 'Invalid username or password' }), { status: 401 });
  }

  const passwordMatches = await bcrypt.compare(password, user.password);
  if (!passwordMatches) {
    return new Response(JSON.stringify({ error: 'Invalid username or password' }), { status: 401 });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

  const cookie = serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60,
  });

  return new Response(JSON.stringify({ user: { id: user.id, username: user.username } }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': cookie,
    },
  });
}
