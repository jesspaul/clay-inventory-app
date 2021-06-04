import './FlexContainer';
import Category from '../Category/Category';

const FlexContainer = ({array}) => {
    return (
        <div className="FlexContainer">
            {
                    array.map((item, idx) => 
                        <Category
                            name={item}
                            key={idx}
                        />
                    )
                }
        </div>
    );
}
 
export default FlexContainer;