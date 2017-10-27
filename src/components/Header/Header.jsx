import React from 'react'
import { Fade } from 'react-reveal'
import styles from './Header.module.scss'

export default class Header extends React.Component {
	render() {
		const { children } = this.props
		return (
			<div className={styles.header}>
				<Fade down tag="h1">
					{children}
				</Fade>
			</div>
		)
	}
}
