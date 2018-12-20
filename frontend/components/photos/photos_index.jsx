import React from 'react';
import PhotoIndexItem from './photos_index_item';
import UploadPhotoFormContainer from './upload_photo_form_container';

class PhotosIndex extends React.Component {
    // constructor(props){
    //     super(props);
    //     // this.state = this.props;
    // //     this.state = {
    // //         photos: Object.values(this.props.photos)
    // // };

    // }
    componentDidMount(){
        // debugger
        this.props.fetchPhotos();
    }

    render() {
        // debugger
        let photos = this.props.photos.map( photo => {
            return (
                <ul>
                    <li>{photo.title}</li>
                    <img src={photo.photo_url} alt=""/>
                    <PhotoIndexItem
                        key={photo.id}
                        photo={photo}
                        photo_url={photo.photo_url}
                    />
                </ul>
            );
        });

        return (
            <div>
                <ul>
                   {photos}
                </ul>
            </div>
        );
    }
}

export default PhotosIndex;