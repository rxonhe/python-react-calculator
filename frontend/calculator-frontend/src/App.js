import React, { useState } from 'react';
import SearchBar from "./components/searchBar/SearchBar";
import ResultArea from "./components/resultArea/ResultArea";
import {handleClear, handleKeyPress} from "./handler/EventHandler";
import {Col, Row} from "antd";

function App() {
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);

    const handleKeyPressCallback = (event) => {
        handleKeyPress(event, inputValue, setResults).then(r => console.log(r));
    };

    const handleClearCallback = () => {
        handleClear(setResults);
    };

    return (
        <div className="page-container">
            <Row
                align="middle"
                justify="center"
                style={{ minHeight: '20vh' , backgroundColor: '#f0f2f5'}}
            >
                <Col span={20}>
                    <h1>Calculator</h1>
                    <SearchBar
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        handleKeyPress={handleKeyPressCallback}
                        handleClear={handleClearCallback}
                    />
                </Col>
            </Row>
            <Row
                align="top"
                justify="center"
                style={{ minHeight: '80vh' , backgroundColor: '#f0f2f5'}}
            >
                <Col span={20}>
                    <ResultArea results={results} />
                </Col>
            </Row>
        </div>
    );
}

export default App;
