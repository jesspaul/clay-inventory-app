import FlexContainer from '../../components/FlexContainer/FlexContainer';
import './Category.css';

const Category = ({ category, array }) => {
    return (
        <div className="Category">
            <h2>{category}</h2>
            <FlexContainer
                array={array}
            />
        </div>
    );
}
 
export default Category;