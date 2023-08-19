import React from "react"

class SlopeVZ extends React.Component {
    constructor(props) {
        super(props)
        this.state = { gs: "", slope: "", result: "" }

        this.gsChange = this.gsChange.bind(this)
        this.slopeChange = this.slopeChange.bind(this)
        this.clearClick = this.clearClick.bind(this)
        this.calculate = this.calculate.bind(this)
    }

    gsChange(event) {
        this.setState({ gs: event.target.value }, () => {
            this.calculate()
        })
    }

    slopeChange(event) {
        this.setState({ slope: event.target.value }, () => {
            this.calculate()
        })
    }

    calculate() {
        var gs = this.state.gs
        var slope = this.state.slope
        if (gs !== "" && slope !== "") {
            var r = Math.round(parseInt(gs) * parseFloat(slope))
            this.setState({ result: r })
        }
    }

    clearClick() {
        this.setState({ slope: "", gs: "", result: "" })
    }

    render() {
        return (
            <div>
                <h5>Calcul de pente (Vz)</h5>
                <p>
                    <label htmlFor="vz_field_gs">Vitesse sol :</label>
                    <input type="number" placeholder="160" onChange={this.gsChange} value={this.state.gs} name="vz_field_gs" id="vz_field_gs" />
                    <span className="unit">kt</span>
                </p>
                <p>
                    <label htmlFor="vz_field_slope">Pente :</label>
                    <input type="number" placeholder="3.0" onChange={this.slopeChange} value={this.state.slope} name="vz_field_slope" id="vz_field_slope" />
                    <span className="unit">%</span>
                </p>
                <p>
                    <button type="reset" onClick={this.clearClick}>Effacer</button>
                </p>
                <p>
                    Résultat :
                    <input type="text" value={this.state.result} id="vz_field_result" readOnly />
                    <span className="unit">ft/min</span>
                </p>
            </div>
        )
    }
}

export default SlopeVZ