import { HomeContainer} from './HomePage.styled';
import { HeroContent } from 'components/HeroContent/HeroContent';
import { Offers } from 'components/Offers/Offers';



export const HomePage = () => {

    return (
        <>
        <HomeContainer>
            <HeroContent />
        </HomeContainer>
        <Offers />
    </>    
    )
}

export default HomePage;