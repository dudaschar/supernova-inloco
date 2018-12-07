import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

class SidebarSubmenuDropdown extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    content: PropTypes.node.isRequired,
    icon: PropTypes.string.isRequired
  }

  render() {
    const {
      active,
      className,
      children,
      icon,
      content,
      ...otherProps
    } = this.props
    const classes = cx('inloco-layout__sidebar-submenu-dropdown', className, {
      activeSubMenu: active
    })
    return (
      <Dropdown className={classes} item icon={icon} {...otherProps}>
        <Dropdown.Menu>
          <Dropdown.Header content={content} />
          {React.Children.map(children, child =>
            React.cloneElement(child, { dropdown: true })
          )}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default SidebarSubmenuDropdown