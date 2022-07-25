import { httpService } from "./http.service";
import { storageService } from "./storage.service";

export const userService = {
  query,
  getUserById,
  removeUser,
  updateUser,
  getLoggedInUser,
};

async function query(filterBy) {
  return await httpService.get("user", filterBy);
}

async function getUserById(userId) {
  return await httpService.get(`user/${userId}`);
}

async function removeUser(userId) {
  return await httpService.delete(`user/${userId}`);
}

async function updateUser(user) {
  if (user._id) {
    console.log('user',user)
    return await httpService.put(`user`, user);
  } else {
    return await httpService.post("user", user);
  }
}

async function getLoggedInUser() {
  try{
    const id = storageService.loadFromStorage();
    console.log('id',id)
    if(!id) return null
    const user = await getUserById(id)
    console.log('user',user)
    return user;
  } catch (err) {
    storageService.removeFromStorage();
  }
}
