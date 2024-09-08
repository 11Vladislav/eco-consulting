import license1 from '../../img/license-1.jpg';
import license2 from '../../img/license-2.jpg';
import { Wrap } from './Licenses.styled';

export const Licenses = () => {
    return (
        <>
        <Wrap>
            <img src={license1} alt='license1' height='552' width='450'/>
            <img src={license2} alt='license2'  height='552' width='450'/>
        </Wrap>
        </>
    )
}