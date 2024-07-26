import { HomeContainer} from './HomePage.styled';
import { HeroContent } from 'components/HeroContent/HeroContent';
import { Offers } from 'components/Offers/Offers';
import { About } from 'components/About/About';
import { HowWork } from 'components/HowWork/HowWork';




export const HomePage = () => {

    return (
        <>
        <HomeContainer>
            <HeroContent />
        </HomeContainer>
            <Offers />
            <About />
            <HowWork/>
    </>    
    )
}

export default HomePage;