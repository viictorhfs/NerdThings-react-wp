import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Textarea from '../../../components/FormField/Textarea';

function CadastroCategoria(){
  
  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresInicias);

  function setValor(chave, valor){
    //chave: nome, descrição etc...
    setValores ({
      ...valores,
      [chave]: valor, //nome: 'valor'
    })
  }

  function handleChange(infoDoEvento){ 
    setValor(infoDoEvento.target.getAttribute('name'), infoDoEvento.target.value);
}


    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {valores.nome}</h1>
        
        <form onSubmit={function handleSubmit(event){
          event.preventDefault();
          setCategorias([
            ...categorias,
            valores
          ]);

          setValores(valoresInicias);
        }}>

          <FormField
            label="Nome da Categoria: "
            type="text"
            name="nome"
            value={valores.nome}
            onChange= {handleChange}
          />

          <Textarea
            label="Descrição"
            name="descricao"
            value={valores.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor: "
            type="color"
            value={valores.cor}
            onChange={handleChange}
          />

          <button>
            Cadastrar
          </button>

        </form>
        
        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key= {`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
    );
  }

  export default CadastroCategoria 