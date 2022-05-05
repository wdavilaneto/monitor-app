import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="footer">
                <div className="pull-right">
                    (21) 2550-9050 <strong>Brasil</strong> CNPJ 28.305.936/0001-40
                </div>
                <div>
                    <strong>MPRJ</strong> 2017 Ministério Público do Rio de Janeiro. Av. Marechal Câmara, n° 370 -
                    Centro - Rio de Janeiro, RJ - CEP 20020-080
                    &copy; 2017
                </div>
            </div>
        );
    }
}

export default Footer;
