// VolcanoPage.js

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert, Spinner } from "reactstrap";
import { Map, Marker } from "pigeon-maps";
import { useParams } from "react-router-dom";
import PopulationDensityChart from "../components/PopulationDensityChart";
import "../styles/VolcanoPage.css";

const VolcanoPage = () => {
  const { id } = useParams();

  const [volcanoData, setVolcanoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [chartData, setChartData] = useState(null);

  // Use effect to fetch data when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchVolcanoData = async () => {
      const headers = { "Content-Type": "application/json" };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      try {
        // Fetch the data from the API
        const response = await fetch(`https://nodejs-express-volcanoes-restful-api.onrender.com/volcano/${id}`, {
          method: "GET",
          headers: headers,
        });
        const data = await response.json();
        if (!response.ok || "error" in data) {
          throw new Error(data.message || "Failed to fetch volcano data");
        }

        if (token) {
          const popu = [
            data.population_5km,
            data.population_10km,
            data.population_30km,
            data.population_100km,
          ];

          delete data.population_5km;
          delete data.population_10km;
          delete data.population_30km;
          delete data.population_100km;

          setChartData({
            labels: ["5km", "10km", "30km", "100km"],
            datasets: [
              {
                label: "Population Density",
                data: popu,
                backgroundColor: ["#3b82f6", "#10b981", "#fbbf24", "#f87171"],
              },
            ],
          });
        }

        setVolcanoData(data);
      } catch (error) {
        setErrorMessage(
          error.message || "An error occurred while fetching data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchVolcanoData();
  }, []);

  return (
    <div style={{ minHeight: "84.5vh", width: "80%", margin: "auto" }}>
      <Container className="volcano-details mt-3">
        <Row className="justify-content-center mt-3">
          <Col md="8" className="text-center">
            <h2>Volcano Information</h2>
          </Col>
        </Row>

        <Row>
          {loading && (
            <div className="text-center mt-5">
              <Spinner color="primary" />
              <p>Loading volcano information...</p>
            </div>
          )}

          {errorMessage && (
            <Col md={{ size: 6, offset: 3 }}>
              <Alert color="danger">{errorMessage}</Alert>
            </Col>
          )}

          {!errorMessage && !loading && (
            <>
              <Col md="3">
                {/* Display the volcano information */}
                <ul className="list-unstyled">
                  <li>
                    <strong>Country:</strong> {volcanoData.country}
                  </li>
                  <li>
                    <strong>Region:</strong> {volcanoData.region}
                  </li>
                  <li>
                    <strong>Subregion:</strong> {volcanoData.subregion}
                  </li>
                  <li>
                    <strong>Last Eruption:</strong> {volcanoData.last_eruption}
                  </li>
                  <li>
                    <strong>Summit:</strong> {volcanoData.summit} m
                  </li>
                  <li>
                    <strong>Elevation:</strong> {volcanoData.elevation} ft
                  </li>
                </ul>
              </Col>
              <Col md="9">
                {/* Display the map showing the volcano location */}
                <Map
                  maxHeight={"35vh"}
                  defaultCenter={[volcanoData.latitude, volcanoData.longitude]}
                  defaultZoom={4}
                >
                  <Marker
                    width={50}
                    anchor={[volcanoData.latitude, volcanoData.longitude]}
                    color={`red`}
                  />
                </Map>
              </Col>
            </>
          )}
        </Row>

        {chartData && !loading && (
          <Row>
            <Col md="3">
              <ul className="list-unstyled" style={{ textAlign: "center" }}>
                <li>
                  <strong>Population Density</strong>
                </li>
              </ul>
            </Col>
            <Col md="9" style={{ maxHeight: "35vh", backgroundColor: "white" }}>
              <PopulationDensityChart chartData={chartData} />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default VolcanoPage;
