import React, { Component, PropTypes } from 'react'
import BaseForm from '../components/BaseForm'
import FieldGroup from '../components/FieldGroup'
import { connect } from 'react-redux'
import { Col, Button } from 'react-bootstrap'
import * as actions from '../redux/actions'

class FeedbackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: Object.keys(props.topics)[0],
            other: ''
        }
    }

    @autobind
    handleChange(e) {
        this.props.updateFormValue(e.target.id, e.target.value);
    }

    render() {
        var topics = this.props.topics;
        var options =
            Object.keys(topics).map(
                (e, i) => <option key={i} value={e}>{topics[e]}</option>
            );
        var other;
        var subject = "Assunto";
        if (this.props.userData.assunto === Object.keys(topics).slice(-1)[0]) {
            other = (<FieldGroup
                id="outro"
                type="text"
                placeholder="Qual o assunto?"
                value={this.props.userData.outro}
                handleChange={this.handleChange}
                required
            />);
            subject = null;
        }

        const selectObj = (
            <FieldGroup
                componentClass="select"
                type="select"
                id="assunto"
                label={subject}
                handleChange={this.handleChange}
                value={this.props.topic}
            >
                {options}
            </FieldGroup>
        );

        return (
            < div id="feedback-form" >
                <div id="feedback-title">Fale Conosco</div>
                <BaseForm
                    title="Deixe o seu comentário, dúvida ou sugestão"
                    buttonText="FEEDBACK"
                    textAreaLabel="Comentário"
                    show={true}
                    noModal>
                    {this.props.topic === 'ou' ? (
                        <div>
                        <Col xs={12} md={6} style={{padding: 0, paddingRight: 10}}>
                            {selectObj}
                        </Col>
                        <Col xs={12} md={6} style={{padding: 0}}>
                            {other}
                        </Col>
                        </div>
                    ) : selectObj
                    }
                    
                </BaseForm>
                <Button id="submit-feedback" type="submit" onClick={this.props.insertFeedback}>Enviar</Button>
            </div >
        );
    }
}

FeedbackForm.propTypes = {
    topics: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        topics: state.topics,
        userData: state.user,
        topic: state.user.assunto,
        show: state.feedback.show,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateFormValue: (what, value) => {
            dispatch(actions.updateFormValue(what, value))
        },
        insertFeedback: () => dispatch(actions.submitFeedback())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm)


