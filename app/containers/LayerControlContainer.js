import { connect } from 'react-redux'
import LayerControl from '../components/LayerControl'
import * as actions from '../redux/actions'

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick: () => {
            dispatch(actions.openDownloadForm('land_ownership'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayerControl)