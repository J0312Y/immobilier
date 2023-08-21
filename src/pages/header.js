import { Component } from 'react'; 
import logo from './immo.jpeg';


class Header extends Component{
    render()
        {
            return(
                <header className='row'>
                    <div className='col-md-5'><img src={logo} className='logo' alt='mon-logo'/></div>
                    <div className='col-md-7 mt-5 subtitle'>{this.props.subtitle}</div>
                </header>
            );
        }

}

// const Header = ({subtitle}) =>(
//     <header className='row'>
//         <div className='col-md-5'><img src={logo} className='logo' alt='mon-logo'/></div>
//         <div className='col-md-7 mt-5 subtitle'>{subtitle}</div>
//     </header>
// )

export default Header;