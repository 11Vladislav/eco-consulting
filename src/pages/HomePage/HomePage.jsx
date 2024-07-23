import { HomeContainer} from './HomePage.styled';
import { HeroContent } from 'components/HeroContent/HeroContent';
import { Offers } from 'components/Offers/Offers';
import { About } from 'components/About/About';




export const HomePage = () => {

    return (
        <>
        <HomeContainer>
            <HeroContent />
        </HomeContainer>
            <Offers />
            <About />
    </>    
    )
}

export default HomePage;