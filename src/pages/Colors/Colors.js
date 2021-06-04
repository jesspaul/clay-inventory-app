import './Colors.css';
import FlexContainer from '../../components/FlexContainer/FlexContainer';

const Colors = () => {
    const colorsArray = ['Red', 'Pink', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'White', 'Black', 'Texture'];
    return (
        <div className="Brands">
            <h2>Colors</h2>
            <FlexContainer
                array={colorsArray}
            />
        </div>
    );
}
 
export default Colors;