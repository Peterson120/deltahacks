import React from 'react';
import './Box.css';

class Box extends React.Component {
    render() {
        return (
            <div className="mt-auto mb-auto flex justify-center items-center">
                <div className="box flex items-center">
                    {this.props.children}
                </div>
            </div>
        );
    }
} export default Box;