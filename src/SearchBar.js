import React, {useState} from "react"
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import ButtonAppBar from "./ButtonAppBar";

const SearchBar = ({onSubmit}) => {
    const [term, setTerm] = useState('')
    console.log('TYPEOF SEARCHBAR ' + typeof(onSubmit))
    const onFormSubmit = event => {
        event.preventDefault();
        onSubmit(term) 
    }


    return (
        // <div className="search">
        //     <form onSubmit={onFormSubmit} className="ui form">
        //         <div className="field">
        //             <label>Nft Search</label>
        //             <input type="text" value={term} onChange={event => setTerm(event.target.value)}></input>
        //         </div>
        //     </form>
        // </div>
        <div>
            <ButtonAppBar/> 
            <div className='navigation'>
                <div className="logo">LOGO</div>
                <div className='search-box'>
                <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <input type="text" value={term} onChange={event => setTerm(event.target.value)}></input>
                </div>
            </form>
                </div>
                <div className='nav-menu'>
                    <ul>
                        <li>Explore</li>
                        <li>Stats</li>
                        <li>Resources</li>
                        <li>Create</li>
                    </ul>    
                </div>
                <div className='nav-icons'>
                    <FaceTwoToneIcon/>
                    <AccountBalanceWalletTwoToneIcon/>
                </div>           
            </div>
        </div>


    )

}

export default SearchBar

            