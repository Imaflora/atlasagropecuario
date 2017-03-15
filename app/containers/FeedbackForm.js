import React, { Component, PropTypes } from 'react'
import BaseForm from '../components/BaseForm'
import FieldGroup from '../components/FieldGroup'
import { connect } from 'react-redux'

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

        var other = (this.state.value === Object.keys(topics).slice(-1)[0] ? 
            <FieldGroup
                id="other"
                type="text"
                placeholder="Qual o assunto?"
                required
            />
        : null);

        return (
             <BaseForm title="Dê o seu feedback" buttonText="FEEDBACK" textAreaPlaceholder="Área" textAreaLabel="Comentário">
                <FieldGroup
                    componentClass="select"
                    type="select"
                    id="subject"
                    label="Assunto"
                    handleChange={this.handleChange}
                    value={this.state.value}
                >
                    {options}
                </FieldGroup>
                {other}

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


