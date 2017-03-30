import { Col } from 'react-bootstrap'

const Header = () => (
            <div>
                <Col id="atlas_logo" xs={12} sm={6}>
                    <img id="atlas_logo_gde" src={require("../img/atlas_logo.png")} alt="Logo do Atlas da Agropecuária Brasielira" />
                    <img id="atlas_logo_pqn" src={require("../img/atlas_logo_320.png")} alt="Logo do Atlas da Agropecuária Brasielira" />
                </Col>
                <Col xs={12} className="HEADER_CINZA"></Col>
                <Col xs={12} className="HEADER_BRANCO">
                    <div className="btn-group">
                      <button className="btn btn-default">NOTÍCIAS</button>       
                      <button className="btn btn-default">BASE DE DADOS</button>
                      <select className="btn btn-default">
                        <option value="pt-BR">PORTUGUÊS</option>
                        <option value="en-US">ENGLISH</option>
                      </select>
                    </div>
                </Col>
            </div>
        );

export default Header;
