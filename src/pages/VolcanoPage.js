// VolcanoDetails.js
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Map, Marker } from 'pigeon-maps';
import PopulationDensityChart from '../components/PopulationDensityChart';
import '../styles/VolcanoPage.css';



const VolcanoPage = ({ volcanoData }) => {
  // Example data provided
  const defaultData = {
    country: "Antarctica",
    region: "Antarctica",
    subregion: "Antarctica and South Sandwich Islands",
    last_eruption: "1970 CE",
    summit: 602,
    elevation: 1975,
    latitude: "-63.0010",
    longitude: "-60.6520",
  };

  // Use the provided data or fallback to default
  const data = volcanoData || defaultData;

  // Convert latitude and longitude to floats for map coordinates
  const latitude = parseFloat(data.latitude);
  const longitude = parseFloat(data.longitude);


  // Configure chart data

  const populationData = [10, 70, 80, 100];
  const chartData = {
    labels: ['5km', '10km', '30km', '100km'],
    datasets: [
      {
        label: 'Population Density',
        data: populationData || [0, 0, 0, 0],
        backgroundColor: ['#3b82f6', '#10b981', '#fbbf24', '#f87171'],
      },
    ],
  };



  return (
    <div style={{minHeight:'85vh',width:'80%',margin:'auto'}}>
    <Container className="volcano-details mt-3">
      <Row className="justify-content-center mt-3">
        <Col md="8" className="text-center">
          <h2>Volcano Information</h2>
        </Col>
      </Row>


      <Row>
        <Col md="3" >
          {/* Display the volcano information */}
          <ul className="list-unstyled" >
            <li><strong>Country:</strong> {data.country}</li>
            <li><strong>Region:</strong> {data.region}</li>
            <li><strong>Subregion:</strong> {data.subregion}</li>
            <li><strong>Last Eruption:</strong> {data.last_eruption}</li>
            <li><strong>Summit:</strong> {data.summit} m</li>
            <li><strong>Elevation:</strong> {data.elevation} ft</li>
          </ul>
        </Col>
        <Col md="9">
          {/* Display the map showing the volcano location */}
          <Map
            
            height={"35vh"}
            defaultCenter={[latitude, longitude]}
            defaultZoom={15}
          >
            <Marker width={50} anchor={[latitude, longitude]} color={`red`}  />
          </Map>
        </Col>
      </Row>


      <Row>
        <Col md="3" >
          <ul className="list-unstyled"  style={{textAlign:'center'}}>
            <li><strong>Population Density</strong></li>
          </ul>
        </Col>
        <Col md="8" style={{ height : "35vh" }}>
        <PopulationDensityChart chartData={chartData} />

        </Col>
      </Row>


    </Container>
    </div>
  );
};


export default VolcanoPage;
