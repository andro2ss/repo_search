export default async function getRepos(setRepositories, searchRepo, setStatus) {
  const apiUrl = "https://api.github.com/search/repositories?q=";
  if (searchRepo.length >= 3) {
    const resp = await fetch(apiUrl + searchRepo);
    const respData = await resp.json();
    setRepositories(respData.items);
    setStatus(2);
  } else {
    alert("Search field should have minimum 3 symbols");
  }
}
