import React from "react"

class TODDist extends React.Component {

    constructor(props) {
        super(props)

        this.state = { delta: "", slope: "", vz: "", gs: "", useVz: false, result: "" }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.calculate = this.calculate.bind(this)
        this.clear = this.clear.bind(this)
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        }, () => {
            this.calculate()
        })
    }

    calculate() {
        
    }

    clear() {
        this.setState({
            delta: "",
            slope: "",
            vz: "",
            gs: "",
            result: ""
        })
    }

    render() {
        return (
            <div>
                <h5>TOD en distance</h5>
                <p>
                    <label htmlFor="delta">ΔFL :</label>
                    <input type="number" placeholder="50" value={this.state.delta} onChange={this.handleInputChange} name="delta" />
                </p>
                <p>
                    <label htmlFor="use_vz">Calculer avec la Vz</label>
                    <input type="checkbox" checked={this.state.useVz} onChange={this.handleInputChange} name="useVz" id="use_vz" />
                </p>
                {!this.state.useVz ?
                    <p>
                        <label htmlFor="slope">Pente :</label>
                        <input type="number" value={this.state.slope} placeholder="3.0" name="slope" />
                        <span id="unit">°</span>
                    </p>
                    :
                    <>
                        <p>
                            <label htmlFor="vz">Vitesse verticale (Vz) :</label>
                            <input type="number" placeholder="500" value={this.state.vz} onChange={this.handleInputChange} name="vz" />
                            <span class="unit">ft/min</span>
                        </p>
                        <p>
                            <label htmlFor="gs">Vitesse sol (GS) :</label>
                            <input type="number" placeholder="160" value={this.state.gs} onChange={this.handleInputChange} name="gs" />
                            <span class="unit">kt</span>
                        </p>
                    </>
                }
                <p>
                    <button type="reset" onClick={this.clear}>Effacer</button>
                </p>
                <p>
                    Résultat :
                    <input type="text" value={this.state.result} id="tod_dist_field_result" readOnly />
                    <span className="unit">NM</span>
                </p>
            </div>
        )
    }
}

export default TODDist