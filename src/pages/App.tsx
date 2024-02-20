import { useState } from 'react';
import gitLogo from '../assets/github.png';
import { Container } from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import { api } from '../services/api';

function App() {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearchRepository = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      console.log(repositories);
      if (data.id) {
        const isExist = repositories.find(repo => repo.id === data.id);
        if (!isExist) {
          setRepositories(p => [...p, data]);
          setCurrentRepo('');
          return; 
        } else {
          alert('Repositório já adicionado');
        }
      }
    } catch (error) {
      alert('Repositório não encontrado');
    }
  }

  const handleRemoveRepository = (id: number) => {
    const newRepositories = repositories.filter(repo => repo.id !== id);
    setRepositories(newRepositories);
    console.log(id);
  }
  return (
    <Container>
      <img src={gitLogo} width={70} height={70} alt="github logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepository} /><br/>
      {repositories.map((repo: any, index) => <ItemRepo key={index} repo={repo} handleRemoveRepository={handleRemoveRepository} />)}
    </Container>
  );
}

export default App;
