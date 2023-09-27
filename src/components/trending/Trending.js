import React from 'react';
import { MainButton } from '../../App.Styled';
import image from "../../assits/2.png";
import { BgTrending, Left, Right, TrendingImg, TrendingWrapper } from './Trending.Styled';
const Trending = () => {
    return (
        <>
        <BgTrending>
            
                <TrendingWrapper>
                    <Left>
                        <h5>TRENDING</h5>
                        <h1>Caring about you and your body.</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                        <MainButton>See Collection</MainButton>
                    </Left>
                    
                    <Right>
                        <TrendingImg src={image}/>
                    </Right>
                </TrendingWrapper>
        </BgTrending>
        </> 
        
    );
}

export default Trending;