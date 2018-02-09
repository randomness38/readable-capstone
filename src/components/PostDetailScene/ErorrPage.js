import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';

class ErorrPage extends Component {

    render () {

        // const { comment, onDelete, onSendVote } = this.props;

        return (
            <div>
                <span>This post doesn't exist has been removed.</span>
                <Pager>
                    <Pager.Item href='/'>GO HOME</Pager.Item>{' '}
                </Pager>
            </div>
        );
    }
}

export default ErorrPage;
