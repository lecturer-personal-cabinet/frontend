import React from 'react';
import {RootState} from "../../store";
import {ThunkDispatch} from "redux-thunk";
import {connect} from "react-redux";
import {DropzoneDialog} from "material-ui-dropzone";
import axios from 'axios';
import {API_HOST, ApiRequest} from "../../actions/api-tool";
import {getToken} from "../../actions/authentication";

interface CustomProps {
    open: boolean,
    openUpload: (open: boolean) => void,
    onSubmit: (url: string) => void,
}

interface StateToProps  {}

interface DispatchToProps {}

type Props = StateToProps & DispatchToProps & CustomProps;

interface State {}

class UploadContainer extends React.Component<Props, State> {

    // @ts-ignore
    handleSubmit = (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${getToken()}`
            }
        };

        axios.post(`${API_HOST}/upload/file`, formData, config)
            .then(response => {
                this.props.onSubmit(response.data['fileDownloadUri']);
            });
    };

    render() {
        return (
            <div>
                <DropzoneDialog
                    filesLimit={1}
                    acceptedFiles={['image/*']}
                    cancelButtonText={"Отменить"}
                    submitButtonText={"Сохранить"}
                    maxFileSize={5000000}
                    open={this.props.open}
                    onClose={() => this.props.openUpload(false)}
                    onSave={(files) => {
                        this.handleSubmit(files[0]);
                    }}
                    showPreviews={true}
                    showFileNamesInPreview={false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer)