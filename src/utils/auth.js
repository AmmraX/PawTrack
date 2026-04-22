
export const logoutUser = () => {
  localStorage.removeItem('pawtrack_profile');
  localStorage.removeItem('pawtrack_auth');
};

export const authenticateUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem('pawtrack_users') || '[]');
  return users.find(user => user.email === email && user.password === password);
};

export const registerUser = (userData) => {
  const users = JSON.parse(localStorage.getItem('pawtrack_users') || '[]');
  
  if (users.some(user => user.email === userData.email)) {
    throw new Error('User already exists');
  }
  
  const newUser = {
    ...userData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };
  
  localStorage.setItem('pawtrack_users', JSON.stringify([...users, newUser]));
  return newUser;
};

export const setAuthSession = (user) => {
  localStorage.setItem('pawtrack_auth', JSON.stringify({
    isAuthenticated: true,
    user: { id: user.id, email: user.email }
  }));
};

export const getAuthSession = () => {
  return JSON.parse(localStorage.getItem('pawtrack_auth'));
};