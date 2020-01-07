import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputBox = ({
    name,
    placeholder,
    value,
    onChange,
    error,
    icon,
    type,
    label
}) => {
    return (
        <div className="input-field">
            <i className="material-icons prefix">{icon}</i>
            <input
                type={type}
                value={value}
                className={classnames('validate')}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
            />
            <label htmlFor={name}>{label}</label>
            {error && <span className="helper-text">{error}</span>}
        </div>
    )
}

InputBox.propTypes = {
    name : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    type : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired
}

InputBox.defaultProps = {
    type : 'text'
}

export default InputBox;