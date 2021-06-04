import './FlexContainer.css';
import Label from '../Label/Label';

const FlexContainer = ({array}) => {
    return (
        <div className="FlexContainer">
            {
                    array.map((name, idx) => 
                        <Label
                            name={name}
                            key={idx}
                        />
                    )
                }
        </div>
    );
}
 
export default FlexContainer;