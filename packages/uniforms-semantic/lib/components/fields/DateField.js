'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _uniforms = require('uniforms');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormat = function dateFormat(value) {
    return value && value.toISOString().slice(0, -8);
};
var dateParse = function dateParse(timestamp, onChange) {
    var date = new Date(timestamp);
    if (date.getFullYear() < 10000) {
        onChange(date);
    }
};

var Date_ = function Date_(_ref) {
    var className = _ref.className;
    var disabled = _ref.disabled;
    var error = _ref.error;
    var icon = _ref.icon;
    var iconLeft = _ref.iconLeft;
    var iconProps = _ref.iconProps;
    var id = _ref.id;
    var inputRef = _ref.inputRef;
    var label = _ref.label;
    var max = _ref.max;
    var min = _ref.min;
    var name = _ref.name;
    var _onChange = _ref.onChange;
    var placeholder = _ref.placeholder;
    var required = _ref.required;
    var value = _ref.value;
    var props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'disabled', 'error', 'icon', 'iconLeft', 'iconProps', 'id', 'inputRef', 'label', 'max', 'min', 'name', 'onChange', 'placeholder', 'required', 'value']);
    return _react2.default.createElement(
        'section',
        (0, _extends3.default)({ className: (0, _classnames2.default)(className, { disabled: disabled, error: error, required: required }, 'field') }, (0, _uniforms.filterDOMProps)(props)),
        label && _react2.default.createElement(
            'label',
            { htmlFor: id },
            label
        ),
        _react2.default.createElement(
            'section',
            { className: (0, _classnames2.default)('ui', { left: iconLeft, icon: icon || iconLeft }, 'input') },
            _react2.default.createElement('input', {
                disabled: disabled,
                id: id,
                max: dateFormat(max),
                min: dateFormat(min),
                name: name,
                onChange: function onChange(event) {
                    return dateParse(event.target.valueAsNumber, _onChange);
                },
                placeholder: placeholder,
                ref: inputRef,
                type: 'datetime-local',
                value: dateFormat(value)
            }),
            (icon || iconLeft) && _react2.default.createElement('i', (0, _extends3.default)({ className: (icon || iconLeft) + ' icon' }, iconProps))
        )
    );
};

Date_.displayName = 'Date';

exports.default = (0, _uniforms.connectField)(Date_);