import React, {useState} from "react"
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import ButtonAppBar from "./ButtonAppBar";
import SearchBox from "./SearchBox";

const SearchBar = ({onSubmit}) => {
  
    return (
        <div>
            <ButtonAppBar onSubmit={onSubmit}/> 
            <div className='navigation'>
                <div className="logo">LOGO</div>
                    <SearchBox onSubmit={onSubmit} />
                <div className='nav-icons'>
                    <FaceTwoToneIcon/>
                    <AccountBalanceWalletTwoToneIcon/>
                </div>           
            </div>
        </div>

    )

}

export default SearchBar

            