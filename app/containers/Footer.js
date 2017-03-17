import { connect } from 'react-redux'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import Collapse from '../components/Collapse'
import BaseForm from '../components/BaseForm'
import FieldGroup from '../components/FieldGroup'
import FeedbackForm from './FeedbackForm'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,

        }
    }



    render() {
        var buttonText = this.state.open ? "FECHAR RODAPÉ" : "ABRIR RODAPÉ";
        var imgBtn = this.state.open ? require("../img/btn_close.png") : require("../img/btn_open.png")

        return (
            <div className={this.state.open ? 'footer-close' : 'footer-open'}>
                <div className="footer-button">
                    <img className={this.state.open ? 'img-close' : 'img-open'} id="footer_arrow" src={imgBtn} alt="Icone de rodapé" />
                    <Button className={this.state.open ? 'btn-close' : 'btn-open'} onClick={() => this.setState({ open: !this.state.open })} style={{ float: "none", marginLeft: "auto" }}>{buttonText}</Button>
                </div>
                <Collapse show={this.state.open}>
                    <div>
                        <div className="footer">
                            <div id="content" className="content row">
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4  align-left">
                                    <div>REALIZAÇÃO</div>
                                        <img id="imaflora_logo" src={require("../img/imaflora_logo.png")} alt="Logo do Imaflora" />
                                        <img id="geolab_logo" src={require("../img/geolab_logo.png")} alt="Logo do Geolab"/>
                                    <div>PARCEIROS</div>
                                        <img id= "kth_logo" src={require("../img/kth_logo.png")} alt="Logo do KTH"/>
                                        <img id= "sei_logo" src={require("../img/sei_logo.png")} alt="Logo da SEI"/>
                                        <img id= "trase_logo" src={require("../img/trase_logo.png")} alt="Logo da Trase"/>
                                    <div>APOIO</div>
                                        <img id="fapesp_logo" src={require("../img/fapesp_logo.png")} alt="Logotipo da Fapesp"/>
                                        <img id="norad_logo" src={require("../img/norad_logo.png")} alt="Logotipo da Norad"/>
                                        <img id="ocf_logo" src={require("../img/ocf_logo.png")} alt="Logotipo do OCF"/>
                                        <img id="ipam_logo" src={require("../img/ipam_logo.png")} alt="Logotipo do Ipam"/>                                                                         
                                </div>
                                <div className="description col-xs-12 col-sm-4 col-md-4 col-lg-4 align-center"><p>O Atlas é uma iniciativa para gerar e disseminar conhecimento sobre a geografia da agropecuária brasileira a partir de uma plataforma online.</p><br /><p>Nessa plataforma estarão organizados e disponibilizados dados secundários e originais sobre o setor agorpecuário, reunindo informações sobre o uso da terra, a aptidão agrícola, a distribuição, produção e produtividade das culturas em séries históricas, além de outras informações ambientais e sociais relevantes para o desenvolvimento rural e a conservação dos rescursos naturais, como o desmatamento e o cumprimento do Código Florestal.</p><br /><p>Assim, a iniciativa visa facilitar o acesso à informação, fomentar estudos e fornecer subsídios para o apoio à tomada de decisão e à formulação de políticas públicas e privadas para o setor.</p></div>
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 align-right footer-right">
                                    <FeedbackForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
        );
    }
}
