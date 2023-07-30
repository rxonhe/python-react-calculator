import {calculate} from "../api/ApiCalls";
import {Keys} from "../constants/Keys";

export const handleKeyPress = async (event, inputValue, setResults) => {
    if (event.key === Keys.ENTER || event.type === 'click') {
        const data = await calculate(inputValue);
        console.log(data);
        setResults(prevResults => [...prevResults, data]);
    }
};

export const handleClear = (setResults) => {
    setResults([]);
};