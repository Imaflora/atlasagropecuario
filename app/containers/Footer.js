import { Button } from 'react-bootstrap'
import Collapse from '../components/Collapse'
import MyModal from '../components/MyModal'

export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div className="footer">
                <Button onClick={ ()=> this.setState({ open: !this.state.open })} style={{float:"none", marginLeft: "auto"}}>Show footer</Button>
                <Collapse show={this.state.open}>
                    <div>
                        <table className="footer-copyright">
                    <tbody width="100%">
                    <tr>
                            <td className="align-left">IMAFLORA</td>
                            <td className="align-center">Atlas: a geografia da agropecuária brasileira</td>
                            <td className="align-right footer-right">
                                <MyModal show={this.state.showModal} onHide={() => this.setState({showModal: false})} title="Example title">
                                    Contents
                                </MyModal>
                                <Button id="botao" onClick={() => this.setState({showModal: true})}> Teste </ Button>
                            </td>
                    </tr>
                    </tbody>
                    </table>
                    </div>
                </Collapse>
             </div>
        );
    }
}