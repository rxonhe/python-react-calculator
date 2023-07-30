import React from 'react';
import {Card, Col, Row} from 'antd';

const ResultArea = ({results}) => {
    return (
        <Row gutter={[10, 10]} style={{marginTop: '20px'}}>
            {results.map((result, index) =>
                <Col span={24}>
                    <Card title={`Result ${index + 1}`}>
                        {result}
                    </Card>
                </Col>
            )}
        </Row>
    );
};


export default ResultArea;
