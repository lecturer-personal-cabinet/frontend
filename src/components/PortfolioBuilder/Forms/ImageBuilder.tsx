import React from "react";
import {BuilderModalProps} from "./common/types";
import UploadContainer from "../../../containers/UploadContainer";

export const ImageBuilder = (builderProps: BuilderModalProps) =>  {
    const [modal, setModal] = React.useState(true);

    const save = (url: string) => {
        const item = {
            type: 'image',
            order: 0,
            metadata: {
                url
            }
        };

        builderProps.onSave(item);
    };

    return (
        <UploadContainer
            open={modal}
            openUpload={(e: boolean) => {}}
            onSubmit={save}
        />
    )
};