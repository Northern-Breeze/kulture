type User = {
  id: string;
  username: string;
  room: string;
}
const users: User[] = [];

// Join user to chat
function userJoin(param: User) {
  const { id, username, room } = param;

  users.push({ id, username, room });

  return { id, username, room };
}

// Get current user
function getCurrentUser(id: string) {
  return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id: string) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room: string) {
  return users.filter(user => user.room === room);
}

export default {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};