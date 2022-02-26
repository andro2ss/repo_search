export default async function getRepos(setRepositories, searchRepo, setStatus) {
  const apiUrl = "https://api.github.com/search/repositories?q=";
  const resp = await fetch(apiUrl + searchRepo);
  const respData = await resp.json();
  setRepositories(respData.items);
  setStatus(2);
}
