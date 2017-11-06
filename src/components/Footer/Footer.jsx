import React from 'react'
import Link from 'gatsby-link'
import styles from './Footer.module.scss'
import config from '../../../config/SiteConfig'

export default class Footer extends React.Component {
	render() {
		return (
			<footer className={styles.footer}>
				{config.copyright} <a href="https://github.com/LeKoArts/gatsby-starter-portfolio-emma">Emma Theme</a>
				{' by '}
				<a href="https://www.lekoarts.de">LekoArts</a>.
			</footer>
		)
	}
}
