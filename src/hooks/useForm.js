import { useState } from 'react';

function useForm(valoresInicias) {
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

    function clearForm() {
        setValores(valoresInicias);
    }

    return {
        valores,
        handleChange,
        clearForm,
    };
}

export default useForm;