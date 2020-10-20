import "./App.css"
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import Segundo from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAleatorio from './components/basicos/aleatorios'
import Card from './components/layout/Card'
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Lista from "./components/repeticao/ListaAlunos"
import Produtos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndirataPai from "./components/comunicacao/IndirataPai"
import Input from "./components/formulario/Input"
import Contador from "./components/contador/Contador"
import Mega from "./components/mega/mega"



export default _ =>
    <div className="App">
        <h1>fudamentos react</h1>

        <div className="Exercicio">

            <Card Titulo="mega" color="#006400" >
                <Mega/>
            </Card>

            <Card Titulo="Contador" color="#4B0082" >
                <Contador numeroInicial={10}/>
            </Card>

            <Card Titulo="Componente Controlado (Input)" color="#FF1493" >
                <Input/>
            </Card>
            
            <Card Titulo="Comunicação Inderata" color="#4B0082" >
                <IndirataPai></IndirataPai>
            </Card>

            <Card Titulo="Comunicação Direta" color="#556B2F" >
                <DiretaPai></DiretaPai>
            </Card>

            <Card Titulo="Condicional" color="#66CDAA" >
                <ParOuImpar numero={20} />
                <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
            </Card>

            <Card Titulo="tabela de Produtos" color="#f02" >
                <Produtos />
            </Card>

            <Card Titulo="Lista de Repetição" color="#f02" >
                <Lista />
            </Card>

            <Card Titulo="Compomente com Filhos" color="#0f8" >
                <Familia Sobnome="Silva" >
                    <FamiliaMembro Nome="Lucas" />
                    <FamiliaMembro Nome="Mateus" />
                    <FamiliaMembro Nome="Ana" />
                </Familia>

            </Card>

            <Card Titulo="Numero Aleatorio" color="#0f0" >
                <NumeroAleatorio Min={0} Max={60} />
            </Card>

            <Card Titulo="Fragmento" color="#00BFFF" >
                <Fragmento />
            </Card>

            <Card Titulo="Com Paramentro" color="#191970">
                <Segundo Nome="joão" Nota={8.3} />
            </Card>

            <Card Titulo="Primeiro compmente" color="#FFD700" >
                <Primeiro />
            </Card>

        </div>

    </div>

