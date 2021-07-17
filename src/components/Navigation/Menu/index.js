import Category from './Category'
import {useState} from 'react'

const Menu = (props) => {
    const {
        isMobileSize,
        categories, 
        betaCategories, 
        clickedName, 
        setClickedName,
        exploreHover,
        setExploreHover
     } = props;

    return (
        <>
        <table 
        className='menu'
        style={isMobileSize ? {width: '250px'} : {width: '700px'}}>
            {categories.map((name, i) => {
                    return (
                        <>
                        <Category
                        isMobileSize={isMobileSize}
                        betaCategories={betaCategories}
                        name={name}
                        isClicked={clickedName === name} 
                        setClickedName={setClickedName}
                        exploreHover={exploreHover}
                        setExploreHover={setExploreHover}/>
                        </>
                    )
                })
            }
        </table>
        </>
    )
}

export default Menu