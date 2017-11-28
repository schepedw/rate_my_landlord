import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  handleClick,
  handleBlur,
  type,
  buttonStyle,
  buttonSize,
  countIndicator,
  width,
  active,
  disabled,
  children,
  id
}) => {
  const attrib = {
    type,
    className: `${buttonStyle}Button ${buttonSize}SizeButton`
  };
  if (handleClick) { attrib.onClick = handleClick }
  if (handleBlur) { attrib.onBlur = handleBlur; }
  if (width) { attrib.style = { width }; }
  if (active) { attrib.className += ' active'; }
  if (disabled) { attrib.disabled = true; }
  if (id) { attrib.id = id; }
  return (
    <button {...attrib}>
      <span className={`${buttonStyle}Button__content`}>
        {children}
      </span>
      {countIndicator > 0 &&
        <span className={`${buttonStyle}Button__countIndicator`}>
          {countIndicator}
        </span>
      }
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  buttonStyle: 'default',
  buttonSize: 'normal'
};

Button.propTypes = {
  handleClick: PropTypes.func,
  handleBlur: PropTypes.func,
  type: PropTypes.string,
  buttonStyle: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'action',
    'destructive',
    'link',
    'icon'
  ]),
  buttonSize: PropTypes.oneOf(['normal', 'small']),
  countIndicator: PropTypes.number,
  width: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  id: PropTypes.string
};

export default Button;
