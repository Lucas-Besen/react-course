import "./Input.css"
import React, {useState} from "react"

export default (props) => {
    const [valor, setValor] = useState("inicial")
    function quandoMudar (e) {
        setValor(e.target.value)
    }

    return(      
        <div className="Input">
            <div style={{
                display: "flex",
                flexDirection:"column"
            }}>
                <input value={valor} onChange={quandoMudar} />
            </div>
        </div>
    )
}