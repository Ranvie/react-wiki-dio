import logo from "../assets/logo.png"
import { Container } from './styles';
import { Input } from '../components/Input';
import { ItemRepo } from '../components/ItemRepo';
import { Button } from "../components/Button";
import { useState } from "react";
import { githubApi } from '../services/githubApi';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    if(isContained()) { alert("O item já existe na lista"); return; }
    
    githubApi.get(`repos/${currentRepo}`)
    .then(({data}) => {
      setRepos(prev => [...prev, data]);
    })
    .catch((err) => {
      alert("Verifique se o nome do repositório está correto.");
      console.error(err);
    })
  }

  const isContained = () => {
    let isExist=false;

    isExist = repos.find(repo => repo.full_name.toLowerCase() === currentRepo.toLowerCase())

    return isExist;
  }

  const handleRemove = (id) => {
    setRepos(repos.filter(repo => repo.id !== id));
  }
  
  return (
    <Container>
      <img src={logo} width={72} height={72} alt="Logo do Github"/>
      <Input placeholder={"Digite o nome de um repositório..."} value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button label="Pesquisar" onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo} handleRemove={handleRemove}/>)}
    </Container>
  );
}

export default App;
