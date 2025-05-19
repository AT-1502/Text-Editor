import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return React.createElement(
    'nav',
    {
      className: `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`,
    },
    React.createElement(
      'div',
      { className: 'container-fluid' },
      React.createElement(
        'a',
        { className: 'navbar-brand', href: '/' },
        props.title
      ),
      React.createElement(
        'button',
        {
          className: 'navbar-toggler',
          type: 'button',
          'data-bs-toggle': 'collapse',
          'data-bs-target': '#navbarNav',
          'aria-controls': 'navbarNav',
          'aria-expanded': 'false',
          'aria-label': 'Toggle navigation',
        },
        React.createElement('span', { className: 'navbar-toggler-icon' })
      ),
      React.createElement(
        'div',
        { className: 'collapse navbar-collapse', id: 'navbarNav' },
        [
          React.createElement(
            'ul',
            { className: 'navbar-nav me-auto mb-2 mb-lg-0' },
            [
              React.createElement(
                'li',
                { className: 'nav-item', key: 'home' },
                React.createElement(
                  'a',
                  { className: 'nav-link active', 'aria-current': 'page', href: '/' },
                  'Home'
                )
              ),
              React.createElement(
                'li',
                { className: 'nav-item', key: 'about' },
                React.createElement(
                  'a',
                  { className: 'nav-link', href: '/about' },
                  'About'
                )
              ),
              React.createElement(
                'li',
                { className: 'nav-item', key: 'contact' },
                React.createElement(
                  'a',
                  { className: 'nav-link', href: '/' },
                  'Contact'
                )
              ),
              React.createElement(
                'li',
                { className: 'nav-item', key: 'history' },
                React.createElement(
                  'a',
                  { className: 'nav-link', href: '/' },
                  'History'
                )
              )
            ]
          ),
          React.createElement(
            'div',
            { className: `form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}` },
            [
              React.createElement('input', {
                className: 'form-check-input',
                type: 'checkbox',
                role: 'switch',
                id: 'switchCheckChecked',
                onClick: props.toggleMode
              }),
              React.createElement(
                'label',
                { className: 'form-check-label', htmlFor: 'switchCheckChecked' },
                'Enable Dark Mode'
              )
            ]
          )
        ]
      )
    )
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

export default Navbar;
