import React from 'react';
import {Card} from '@material-ui/core';

import './wrapper.scss';

interface WrapperProps {
    children: React.ReactChild
}

const Wrapper = (props: WrapperProps): React.ReactElement => {
    const {children} = props;
    return(
        <div className='wrapper-container'>
            <Card className='wrapper-content'>
                    {children}
            </Card>
        </div>
    );
}

export default Wrapper;