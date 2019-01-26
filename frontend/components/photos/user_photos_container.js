import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserPhotos from './user_photos';
import { fetchPhotos, deletePhoto } from '../../actions/photo_actions';

const mSTP = (state, ownProps) => {
    let user_id = ownProps.match.params.id;
    let photos = Object.values(state.entities.photos).filter( pics => pics.photographer_id == ownProps.match.params.id);
    // let user_id = Object.values(state.entities.users)[state.session.id]
    return ({
        photos: photos,
        user_id: user_id
    });
};

const mDTP = (dispatch) => {
    return ({
        fetchPhotos: () => dispatch(fetchPhotos()),
        deletePhoto: photoId => dispatch(deletePhoto(photoId))
    });
};

export default connect(mSTP, mDTP)(UserPhotos);