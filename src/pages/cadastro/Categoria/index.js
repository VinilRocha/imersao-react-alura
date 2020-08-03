import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

function CadastroCategoria() {

    const categoriaInicial = {
        nome:'',
        descricao: '',
        cor: '#000'
    };

    const [todasCategorias, setTodasCategorias] = useState([])
    const [categorias, setCategorias] = useState(categoriaInicial);

    function handleCampoNovaCategoria(input, valor){
        setCategorias({
            ...categorias,
            [input]: valor
        })
    }

    function handleChangeInput(event) {
        handleCampoNovaCategoria(
            event.target.getAttribute('name'),
            event.target.value
        )
    }

    function handleSubmitNovaCategoria(event) {
        event.preventDefault();
        setTodasCategorias([...todasCategorias, categorias])
        setCategorias(categoriaInicial)
    }

    useEffect(()=>{
        const URL = 'http://localhost:3333/'
        fetch(`${URL}categorias`).then( async (data)=> {
            const response = await data.json();
            setTodasCategorias([...response]) 
        })
    },[])

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {categorias.nome}</h1>

            <form onSubmit={handleSubmitNovaCategoria}>
                <FormField
                    label="Nome"
                    name="nome"
                    type="text"
                    value={categorias.nome}
                    onChange={handleChangeInput} 
                />
                <FormField
                    label="Descrição"
                    name="descricao"
                    type="textarea"
                    value={categorias.descricao}
                    onChange={handleChangeInput} 
                />
                <FormField
                    label="Cor"
                    name="cor"
                    type="color"
                    value={categorias.cor}
                    onChange={handleChangeInput} 
                />
                <br/>
                <Button style={{backgroundColor:"var(--pink-2)"}}>Cadastrar</Button>
            </form>

            <br />
            <h2>Categorias:</h2>
            <ul>
                {todasCategorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria.nome}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <br />
            <br />
            <br />
            <Link to="/">Ir para home</Link>
        </PageDefault>
    )
}


export default CadastroCategoria;