import React from 'react';
import {Col, Input, Row} from 'antd';
import {DeleteOutlined, SearchOutlined} from "@ant-design/icons";

const SearchIcons = ({ handleKeyPress, handleClear }) => {
    return (
        <Row gutter={[6, 0]}>
            <Col span={12}><SearchOutlined onClick={handleKeyPress} /></Col>
            <Col span={12}><DeleteOutlined onClick={handleClear} style={{color: "red"}}/></Col>
        </Row>
    );
};

const SearchBar = ({ inputValue, setInputValue, handleKeyPress, handleClear }) => {
    return (
        <Input
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            suffix={SearchIcons({ handleKeyPress, handleClear })}
            style={{ position: 'sticky', top: 0 }}
        />
    );
};

export default SearchBar;
