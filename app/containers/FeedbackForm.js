import React, { Component, PropTypes } from 'react'
import BaseForm from '../components/BaseForm'
import FieldGroup from '../components/FieldGroup'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'

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
        console.log(e.target);
        this.setState({
            value: e.target.value
        });
    }


    render() {
        var topics = this.props.topics;
        var options =
            Object.keys(topics).map(
                (e, i) => <option key={i} value={e}>{topics[e]}</option>
            );
        var other;
        var subject = "Assunto";
        if (this.state.value === Object.keys(topics).slice(-1)[0]) {
            other = (<FieldGroup
                id="other"
                type="text"
                placeholder="Qual o assunto?"
                required
            />);
            subject = null;
        }

        return (
            <BaseForm title="Dê o seu feedback" buttonText="FEEDBACK" textAreaLabel="Comentário">
                <Col xs={12} md={6}>
                <FieldGroup
                    componentClass="select"
                    type="select"
                    id="subject"
                    label={subject}
                    handleChange={this.handleChange}
                    value={this.state.value}
                    anotherChildren={other}
                >
                    {options}
                </FieldGroup>
                </Col>
                <Col xs={12} md={6}>
                {other}
                </Col>

            </BaseForm>
        );
    }
}

FeedbackForm.propTypes = {
  topics: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        topics: state.topics
    }
}

export default connect(mapStateToProps)(FeedbackForm)


