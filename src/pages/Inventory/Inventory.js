import './Inventory.css';

const Inventory = () => {
    return (
        <div className="Inventory">
            <h2>My Inventory</h2>
            <div className="sorting">
                <label htmlFor="sort">Sort By:</label>
                <select name="sort" id="sort">
                    <option value="brand">Brand</option>
                    <option value="color">Color</option>
                    <option value="quantity">Quantity</option>
                </select>
            </div>
        </div>
    );
}
 
export default Inventory;