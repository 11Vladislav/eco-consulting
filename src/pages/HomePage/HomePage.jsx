import { HomeContainer} from './HomePage.styled';
import { HeroContent } from 'components/HeroContent/HeroContent';
import { Offers } from 'components/Offers/Offers';
import { About } from 'components/About/About';
import { HowWork } from 'components/HowWork/HowWork';
import { ConsultationForm } from 'components/ConsultationForm/ConsultationForm';
import { Footer } from 'components/Footer/Footer';




export const HomePage = () => {

    return (
        <>
        <HomeContainer>
            <HeroContent />
        </HomeContainer>
            <Offers />
            <About />
            <HowWork />
            <ConsultationForm />
            <Footer/>
    </>    
    )
}

export default HomePage;