import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import Collapse from '../components/Collapse'
import BaseForm from '../components/BaseForm'
import FieldGroup from '../components/FieldGroup'
import FeedbackForm from './FeedbackForm'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,

        }
    }



    render() {
        var buttonText = this.state.open ? this.props.translation["hide"] : this.props.translation["about_atlas"];
        var imgBtn = this.state.open ? require("../img/btn_close.png") : require("../img/btn_open.png")

        return (
            <div className={this.state.open ? 'footer-close' : 'footer-open'}>
                
                <div className="footer-button">
                    <div id="div-img-footer">
                        <img className={this.state.open ? 'img-close' : 'img-open'} id="footer_arrow" src={imgBtn} alt="Icone de rodapé" />
                    </div>
                    <Button className={this.state.open ? 'btn-close' : 'btn-open'} onClick={() => this.setState({ open: !this.state.open })} style={{ float: "none", marginLeft: "auto" }}>{buttonText}</Button>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.imaflora.org%2Fatlasagropecuario" target="_blank"><img id="facebook_icon" src={require("../img/facebook_icon.png")} alt="Icone do Facebook"/></a>
                    <a href="https://twitter.com/intent/tweet?text=Atlas%20Agropecu%C3%A1rio%20-%20http%3A%2F%2Fwww.imaflora.org%2Fatlasagropecuario" target="_blank"><img id="twitter_icon" src={require("../img/twitter_icon.png")} alt="Icone do Twitter"/></a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=http://www.imaflora.org/atlasagropecuario/&title=Atlas%20Agropecu%C3%A1rio" target="_blank"><img id="linkedin_icon" src={require("../img/linkedin_icon.png")} alt="Icone do LinkedIn"/></a>   
                </div>   
                <Collapse show={this.state.open}>
                    <div>
                        <div className="footer">
                            <div id="content" className="content row">
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 footer-column align-left">
                                    <div>REALIZAÇÃO</div>
                                    <img id="imaflora_logo" src={require("../img/imaflora_logo.png")} alt="Logo do Imaflora" />
                                    <img id="geolab_logo" src={require("../img/geolab_logo.png")} alt="Logo do Geolab" />
                                    <div>PARCEIROS</div>
                                    <img id="kth_logo" src={require("../img/kth_logo.png")} alt="Logo do KTH" />
                                    <img id="sei_logo" src={require("../img/sei_logo.png")} alt="Logo da SEI" />
                                    <img id="trase_logo" src={require("../img/trase_logo.png")} alt="Logo da Trase" />
                                    <div>APOIO</div>
                                    <img id="fapesp_logo" src={require("../img/fapesp_logo.png")} alt="Logotipo da Fapesp" />
                                    <img id="norad_logo" src={require("../img/norad_logo.png")} alt="Logotipo da Norad" />
                                    <img id="ocf_logo" src={require("../img/ocf_logo.png")} alt="Logotipo do OCF" />
                                    <img id="ipam_logo" src={require("../img/ipam_logo.png")} alt="Logotipo do Ipam" />
                                </div>
                                <div className="description col-xs-12 col-sm-4 col-md-4 col-lg-4 footer-column align-center">{this.props.footerText}</div>
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 footer-column align-right footer-right">
                                    {/*<Button id="botao" onClick={this.props.showFeedback}>FEEDBACK</Button>*/}
                                    <FeedbackForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        footerText: state.footerText,
        translation: state.translation
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showFeedback: () => {
            dispatch(actions.showFeedback())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)