import React from "react";

class SlopePercent extends React.Component {
    constructor(props) {
        super(props)

        this.state = { vz: "", gs: "", result: "" }

        this.vzChange = this.vzChange.bind(this)
        this.gsChange = this.gsChange.bind(this)
        this.calculate = this.calculate.bind(this)
    }

    vzChange(event) {
        this.setState({ vz: event.target.value }, () => {
            this.calculate()
        })
    }

    gsChange(event) {
        this.setState({gs: event.target.value}, () => {
            this.calculate()
        })
    }

    calculate() {
        var vz = this.state.vz
        var gs = this.state.gs

        if (vz !== "" && gs !== "") {
            var r = (parseInt(vz) / parseFloat(gs)).toFixed(1)
            this.setState({result: r})
        }
    }

    render() {
        return (
            <div>
                <h5>Calcul de pente (%)</h5>
                <p>
                    <label htmlFor="slope_field_vz">Vitesse verticale (Vz) :</label>
                    <input type="number" placeholder="500" value={this.state.vz} onChange={this.vzChange} name="slope_field_vz" id="slope_field_vz" />
                    <span className="unit">ft/min</span>
                </p>
                <p>
                    <label htmlFor="slope_field_gs">Vitesse sol :</label>
                    <input type="number" placeholder="160" value={this.state.gs} onChange={this.gsChange} name="slope_field_gs" id="slope_field_gs" />
                    <span className="unit">kt</span>
                </p>
                <p>
                    <input type="reset" value="Effacer" />
                </p>
                <p>
                    Résultat :
                    <input type="text" id="slope_field_result" value={this.state.result} readOnly />
                    <span className="unit">%</span>
                </p>
            </div>
        )
    }

}

export default SlopePercent