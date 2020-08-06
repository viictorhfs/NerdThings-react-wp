import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';


function CadastroCategoria() {
  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, valores, clearForm } = useForm(valoresInicias);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://nerdthings.herokuapp.com/categorias';
    // E a ju ama variáveis
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Uma categoria bacanudassa',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Outra categoria bacanudassa',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000);
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

        clearForm(valoresInicias);
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
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
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

export default CadastroCategoria;
