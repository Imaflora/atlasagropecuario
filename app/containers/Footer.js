import { Collapse, Button } from 'react-bootstrap'

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
                <Collapse in={this.state.open}>
                    <div>
                        <table className="footer-copyright">
                    <tbody width="100%">
                    <tr>
                            <td>IMAFLORA</td>
                            <td>Atlas: a geografia da agropecuária brasileira</td>
                            <td className="footer-right">
                                Desenvolvido por:
                                <ul style={{listStyleType: 'none'}}>
                                    <li>Caio Hamamura</li>
                                    <li>Felipe José Cerignoni</li>
                                </ul>
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