import FlexContainer from '../../components/FlexContainer/FlexContainer';
import './Brands.css';

const Brands = () => {
    const brandsArray = ['Premo', 'Fimo', 'Sculpey III'];
    return (
        <div className="Brands">
            <h2>Brands</h2>
            <FlexContainer
                array={brandsArray}
            />
        </div>
    );
}
 
export default Brands;