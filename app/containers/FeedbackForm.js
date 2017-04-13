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
            topics.map(
                (e, i) => <option key={i} value={e}>{this.props.translation[e]}</option>
            );
        var other;
        if (this.props.userData.assunto === topics.slice(-1)[0]) {
            other = (<FieldGroup
                id="outro"
                type="text"
                value={this.props.userData.outro}
                handleChange={this.handleChange}
                required
            />);
        }

        const selectObj = (
            <FieldGroup
                componentClass="select"
                type="select"
                id="assunto"
                handleChange={this.handleChange}
                value={this.props.topic}
            >
                {options}
            </FieldGroup>
        );

        return (
            < div id="feedback-form" >
                <div id="feedback-title">{this.props.translation["contactUs"]}</div>
                <BaseForm
                    title="Deixe o seu comentário, dúvida ou sugestão"
                    buttonText="FEEDBACK"
                    textAreaLabel={this.props.translation["cm"]}
                    show={true}
                    noModal>
                    {this.props.topic === 'ou' ? (
                        <div id="feedback-other-group">
                        <Col id="feedback-other" xs={12} md={6}>
                            {selectObj}
                        </Col>
                        <Col xs={12} md={6} style={{padding: 0}}>
                            {other}
                        </Col>
                        </div>
                    ) : selectObj
                    }
                    
                </BaseForm>
                <Button id="submit-feedback" type="submit" onClick={this.props.insertFeedback}>{this.props.translation["submit"]}</Button>
            </div >
        );
    }
}

FeedbackForm.propTypes = {
    topics: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        topics: state.topics,
        userData: state.user,
        topic: state.user.assunto,
        show: state.feedback.show,
        translation: state.translation,
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


