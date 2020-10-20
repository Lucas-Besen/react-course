import React from "react"
import Produtos from "../../data/produtos"
import"./TabelaProdutos.css"
export default (props) => {

    function getdados() {
        return Produtos.map((Produto, i) => {
            return (
                <tr key={Produto.id} className={i % 2 === 0 ? "Par" : ""}>
                    <td>{Produto.id}</td>
                    <td>{Produto.nome}</td>
                    <td>R$ {Produto.valor}</td>
                </tr>
            )
        })
    }
    return (
        <div className="TabelasProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {getdados()}
                </tbody>
            </table>
        </div>
    )

}