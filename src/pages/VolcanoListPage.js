// // VolcanoListPage.js
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Select from "react-select";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "../styles/VolcanoListPage.css";
import { useNavigate } from "react-router-dom";

const VolcanoListPage = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [radius, setRadius] = useState("");
  const [rowData, setRowData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [columnDefs] = useState([
    { headerName: "ID", field: "id", hide: true },
    {
      headerName: "Name",
      field: "name",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Region",
      field: "region",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Subregion",
      field: "subregion",
      sortable: true,
      filter: true,
      flex: 1,
    },
  ]);

  const countryOptions = countries.map((country) => ({
    value: country,
    label: country,
  }));

  // Fetch the list of countries once
  useEffect(() => {
    fetch("https://nodejs-express-volcanoes-restful-api.onrender.com/countries")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleSearch = () => {
    if (country) {
      let apiUrl = `https://nodejs-express-volcanoes-restful-api.onrender.com/volcanoes?country=${country.value}`;
      if (radius) {
        apiUrl += `&populatedWithin=${radius}`;
      }

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setRowData(data))
        .catch((error) => console.error("Error fetching volcanoes:", error));
    }
  };

  // Navigate to details page when a row is clicked
  const handleRowClick = (event) => {
    navigate(`volcano/${event.data.id}`);
  };

  return (
    <Container className="mt-3 volcano-list-container">
      <Row>
        <Col md="12">
          <h2 className="text-center">Volcano List</h2>
        </Col>
      </Row>
      <Row className="mt-1">
        <Col md="6">
          <FormGroup>
            <Label for="country">Country:</Label>
            <Select
              id="country"
              value={country}
              onChange={setCountry}
              options={countryOptions}
              placeholder="Select a country"
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label for="radius">Populated within:</Label>
            <Input
              type="select"
              id="radius"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
            >
              <option value="">Any</option>
              <option value="30km">30km</option>
              <option value="50km">50km</option>
              <option value="100km">100km</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md="2">
          <Button color="primary" className="mt-4" onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Row>

      <Row className="mt-1">
        <Col md="12">
          <div
            className="ag-theme-quartz"
            style={{ height: "60vh", margin: "0" }}
          >
            <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              pagination={true}
              paginationPageSize={8}
              paginationPageSizeSelector={[8, 16, 32, 64, 124]}
              onRowClicked={handleRowClick}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VolcanoListPage;
