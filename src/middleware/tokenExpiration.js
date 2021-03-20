import jwt from 'jsonwebtoken';

// eslint-disable-next-line no-unused-vars, consistent-return
const checkTokenExpiration = store => next => async action => {
  const token = localStorage.getItem('auth-token');
  if (!token) {
    return next(action);
  }

  const { payload } = jwt.decode(token, { complete: true });
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('auth-token');
  }
  next(action);
};

export default checkTokenExpiration;
