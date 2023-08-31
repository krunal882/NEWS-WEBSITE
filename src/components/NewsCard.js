import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Spinner from '../Spinn';
import Badge from 'react-bootstrap/Badge';
import LoadingBar from 'react-top-loading-bar'

const GroupExample = (props) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([false]);
    const [progress, setProgress] = useState(0);

    const api = () => {
        setProgress(40);

        setLoading(true);
        fetch(`https://inshortsapi.vercel.app/news?category=${props.category}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                setLoading(false);
                setProgress(100);
            });
    };

    useEffect(() => {
        api();
        document.title = (`${props.category}` + "- NEWS");
        const interval = setInterval(api, 60000);
        return () => clearInterval(interval);
    }, []);

    let handleN = () => {
        console.log("next clicked")
    }

    let handleP = () => {
        console.log("prev clicked")
    }

    return (
        <>
            <div className='container p-2'>
                <div>
                    <LoadingBar
                        color='#f11946'
                        progress={progress}
                        onLoaderFinished={() => setProgress(0)}
                    />
                </div>

                <div className="container my-2">

                    {loading && <Spinner />}
                </div>
                <Container fluid >
                    <Row md={3}>
                        {data.map((value, index) => (
                            <Card key={index} className='g-4'   >
                                <Badge bg="danger" style={{ position: 'absolute', top: 0, right: "12px" }}>author - {value.author}</Badge>

                                <Card.Img variant="top" src={value.imageUrl} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />

                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>{value.content}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated {value.time}</small>
                                </Card.Footer>
                            </Card>
                        ))}
                    </Row>
                </Container>
                <div className="container d-flex justify-content-between my-3" >
                    <Button onClick={handleP} variant="dark">previous</Button>
                    <Button onClick={handleN} variant="dark">next</Button>

                </div>
            </div>
        </>
    );
};
export default GroupExample; 
