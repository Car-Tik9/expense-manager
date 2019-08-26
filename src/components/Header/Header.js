import React, { Component } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Header extends Component {

    render() {

        return(
            <header>
                <div className='dk-container'>
                    <div className='header-items dk-flex'>
                        <div className='header-logo dk-flex'>
                            EM
                        </div>
                        <div className='header-links'>
                            <a href="https://gitlab.com/dileepreddyk/expense-manager.git" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )

    }

}

export default Header;