import SearchButton from '../SearchButton'
import OnBoardingButton from '../OnBoardingButton'
import './style.css'
import CorpService from '../CorpService'

const BtnBundleWeb = (props) => {
    const {
        setIsSearchClicked, 
        setIsOnBoarding,
    } = props;
    
    return (
        <>
            <div className='etc'>
                <SearchButton setIsSearchClicked={setIsSearchClicked}/>
                <OnBoardingButton setIsOnBoarding={setIsOnBoarding}/>
                <table className='space'>
                    <td 
                    style={{borderRight: 'solid 1px black'}}/>  
                    <td/>
                </table>
                <CorpService/>
            </div>
        </>
    )
}

export default BtnBundleWeb;