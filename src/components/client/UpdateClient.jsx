
import React from 'react';

import ClientForm from '../ClientForm';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const UpdateClient = () => {
    return (<div>

        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">

        </button>


        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Update client info</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ClientForm />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary bg-dark" data-bs-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

UpdateClient.propTypes = propTypes;
UpdateClient.defaultProps = defaultProps;
// #endregion

export default UpdateClient;

