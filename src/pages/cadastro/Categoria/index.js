import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresInicias);

  function setValor(chave, valor) {
    // chave: nome, descrição etc...
    setValores({
      ...valores,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infoDoEvento) {
    setValor(infoDoEvento.target.getAttribute('name'), infoDoEvento.target.value);
  }

  useEffect(() => {
    console.log("alou alou");
    const URL_JSON = "http://localhost:8080/categoria";

    fetch(URL_JSON).then(async (respostaServidor) => {
      const resposta = await respostaServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });

    /*     setTimeout(() => {
          setCategorias([
            ...categorias,
            {
              "id": 1,
              "nome": "Front-End",
              "descricao": "Uma categoria show",
              "cor": "#CBD1FF"
            },
            {
              "id": 2,
              "nome": "Back-End",
              "descricao": "Outra categoria show",
              "cor": "#CBD1FF"
            },
          ]);
        }, 4 * 1000); */
  }, []);


  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);

        setValores(valoresInicias);
      }}
      >

        <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

        {categorias.length === 0 && <div>
          Loading...
        </div>
        }

      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
