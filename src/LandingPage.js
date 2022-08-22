import FreeSoloCreateOption from "./FreeSoloCreateOption"
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import ButtonAppBar from "./ButtonAppBar";


function LandingPage() {

    return (
        <div>
            <ButtonAppBar/>
            <div className='navigation'>
                <div className="logo">LOGO</div>
                <div className='search-box'>
                    <FreeSoloCreateOption />
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

export default LandingPage