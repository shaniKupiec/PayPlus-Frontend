import { httpService } from "./http.service";
import { storageService } from "./storage.service";

export const authService = {
  login,
  logout,
};

async function login(userCred) {
  const user = await httpService.post("auth/login", userCred);
  if (!user) throw "no user";
  storageService.saveToStorage(user._id);
  return user;
}

function logout() {
  storageService.removeFromStorage();
}
