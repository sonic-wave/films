export const Dropdown = ({ selectedOption, handleChange }: { selectedOption: string | number, handleChange: any }) => {

    return (
        <div>
            <label htmlFor="options">Choose an option: </label>
            <select id="options" value={selectedOption} onChange={handleChange}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
            </select>
        </div>
    );
};