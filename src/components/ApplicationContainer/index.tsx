import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import React from "react";

interface ApplicationContainerProps {}

class ApplicationContainer extends React.Component<ApplicationContainerProps, {}> {
    render() {
        return (
            <div>
                <main>
                    <ToastContainer
                        position={"bottom-left"}
                        autoClose={5000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        draggable
                        pauseOnHover
                    />
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default ApplicationContainer;
