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
        return (
            <div className="footer">
                <Button onClick={() => this.setState({ open: !this.state.open })} style={{ float: "none", marginLeft: "auto" }}>Show footer</Button>
                <Collapse show={this.state.open}>
                    <div>
                        <table className="footer-copyright">
                            <tbody width="100%">
                                <tr>
                                    <td className="align-left">IMAFLORA</td>
                                    <td className="align-center">Atlas: a geografia da agropecuária brasileira</td>
                                    <td className="align-right footer-right">
                                    <FeedbackForm />
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
