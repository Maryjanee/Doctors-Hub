import jwt from 'jsonwebtoken';

export const getUsernameFromToken = () => {
  const token = localStorage.getItem('auth-token');
  if (!token) {
    return null;
  }
  const { username } = jwt.decode(token);
  return username;
};

export const getUserIdFromToken = () => {
  const token = localStorage.getItem('auth-token');
  if (!token) {
    return null;
  }
  const { user_id: userId } = jwt.decode(token);
  return userId;
};
