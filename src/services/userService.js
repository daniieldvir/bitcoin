import { storageService } from './async-storage.service';
// import { localStorage } from './storageService';
export const userService = {
  getUser,
  addMove,
  signUp,
};

const USER_KEY = 'user';
let loggedInUser;

function getUser() {
  //  Promise.resolve(localStorage.getItem(USER_KEY));
  return storageService.query(USER_KEY);
}

function addMove(contact, amount) {
  console.log('amount', amount);
  if (loggedInUser.coins - amount < 0) {
    alert('You cant do that');
    return;
  }

  loggedInUser.coins -= amount;
  let sentAt = new Date().toLocaleTimeString();
  loggedInUser.moves.unshift({ to: contact, amount, sentAt });
  storageService.store(USER_KEY, loggedInUser);
}

function signUp(name) {
  let user = { name, coins: 100, moves: [] };
  loggedInUser = user;
  storageService.store(USER_KEY, loggedInUser);
  console.log('loggedInUser', loggedInUser);
}
