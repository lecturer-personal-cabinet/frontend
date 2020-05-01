import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {WithStyles} from "@material-ui/core";
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import {DragDrop} from '@uppy/react'

interface Props extends WithStyles<typeof styles> {
}

function ImagePicker(props: Props) {
    const uppy = Uppy({
        meta: {type: 'avatar'},
        restrictions: {maxNumberOfFiles: 1},
        autoProceed: true
    });

    uppy.use(Tus, {endpoint: '/upload'});

    uppy.on('complete', (result) => {
        const url = result.successful[0].uploadURL;
    });

    return (
        <div>
            <DragDrop
                uppy={uppy}
                locale={{
                    strings: {
                        dropHereOr: 'Drop here or %{browse}',
                        browse: 'browse'
                    }
                }}
            />
        </div>
    );
}

export default withStyles(styles)(ImagePicker);