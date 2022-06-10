const baseURL = "https://api.github.com";

async function getUserData(username: string) {
  return await fetch(`${baseURL}/users/${username}`)
    .then(res => res.json());
}

async function searchUser(username: string, perPage: number = 10) {
  let result = await fetch(`${baseURL}/search/users?q=${username}&per_page=${perPage}`)
                      .then(res => res.json());
  result = result.items;
  
  return result;
}

export { getUserData, searchUser };