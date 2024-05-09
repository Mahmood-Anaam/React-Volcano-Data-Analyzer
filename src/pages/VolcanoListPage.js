// // VolcanoListPage.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import Select from 'react-select';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import '../styles/VolcanoListPage.css';
import { useNavigate } from 'react-router-dom';

const VolcanoListPage = () => {

  // const CustomButtonComponent = (props) => {
  //   return <Button  color="primary" onClick={() => window.alert('clicked') }>Click for details</Button>;
  // };
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [radius, setRadius] = useState('');
  const [rowData, setRowData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [columnDefs] = useState([
    { headerName: 'ID', field: 'id', hide: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true, flex:1 },
    { headerName: 'Region', field: 'region', sortable: true, filter: true , flex:1},
    { headerName: 'Subregion', field: 'subregion', sortable: true, filter: true , flex:1},
    // {headerName: 'Details',field: 'id',cellRenderer:CustomButtonComponent, flex:1},
  ]);


 

  // Convert countries list to react-select format
  const countryOptions = countries.map((country) => ({
    value: country,
    label: country,
  }));

  // Fetch the list of countries once
  useEffect(() => {
    fetch('http://4.237.58.241:3000/countries')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);


  
  // Handle search based on selected country and optional populatedWithin
  const handleSearch = () => {
    if (country){
     
    let apiUrl = `http://4.237.58.241:3000/volcanoes?country=${country.value}`;
    if (radius) {
      apiUrl += `&populatedWithin=${radius}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRowData(data))
      .catch((error) => console.error('Error fetching volcanoes:', error));

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
          <Button color="primary" className="mt-4" onClick={handleSearch}>Search</Button>
        </Col>
      </Row>

      
      <Row className="mt-1">
        <Col md="12">
          <div className="ag-theme-quartz" style={{height:'60vh',margin:'0'}}>
            <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              pagination={true}
              paginationPageSize={8}
              paginationPageSizeSelector={[8, 16, 32,64,124]}
              onRowClicked={handleRowClick}
              
            />
          </div>
        </Col>
      </Row>


    </Container>
  );
};










//   return (
//     <div className="ag-theme-alpine volcano-list-container">
//       <AgGridReact
//         columnDefs={columnDefs}
//         rowData={rowData}
//         pagination={true}
//         paginationPageSize={10}
//         paginationPageSizeSelector={[10, 25, 50,75,100]}
//       />
//     </div>
//   );
// };

export default VolcanoListPage;








// VolcanoListPage.js
// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
// import Select from 'react-select';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import '../styles/VolcanoListPage.css';

// const VolcanoListPage = () => {
//   const [country, setCountry] = useState(null);
//   const [radius, setRadius] = useState('');
//   const [rowData, setRowData] = useState([]);
//   const [countries, setCountries] = useState([]);
//   const [columnDefs] = useState([
//     { headerName: 'Name', field: 'name', sortable: true, filter: true },
//     { headerName: 'Region', field: 'region', sortable: true, filter: true },
//     { headerName: 'Subregion', field: 'subregion', sortable: true, filter: true },
//     {
//       headerName: 'Actions',
//       field: 'id',
//       cellRendererFramework: (params) => (
//         <Button
//           color="primary"
//           size="sm"
//           style={{ backgroundColor: '#007bff', borderRadius: '8px' }}
//           onClick={() => {
//             // Navigate to volcano details page
//             window.location.href = `/volcano/${params.value}`;
//           }}
//         >
//           View Details
//         </Button>
//       ),
//     },
//   ]);

//   // Convert countries list to react-select format
//   const countryOptions = countries.map((country) => ({
//     value: country,
//     label: country,
//   }));

//   // Fetch the list of countries once
//   useEffect(() => {
//     fetch('http://4.237.58.241:3000/countries')
//       .then((response) => response.json())
//       .then((data) => setCountries(data))
//       .catch((error) => console.error('Error fetching countries:', error));
//   }, []);

//   // Handle search based on selected country and optional populatedWithin
//   const handleSearch = () => {
//     let apiUrl = `http://4.237.58.241:3000/volcanoes?country=${country ? country.value : ''}`;
//     if (radius) {
//       apiUrl += `&populatedWithin=${radius}`;
//     }

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => setRowData(data))
//       .catch((error) => console.error('Error fetching volcanoes:', error));
//   };

//   return (
//     <Container className="volcano-list-container mt-5">
//       <Row>
//         <Col md="12">
//           <h2 className="text-center">Volcano List</h2>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col md="6">
//           <FormGroup>
//             <Label for="country">Country:</Label>
//             <Select
//               id="country"
//               value={country}
//               onChange={setCountry}
//               options={countryOptions}
//               placeholder="Select a country"
//             />
//           </FormGroup>
//         </Col>
//         <Col md="4">
//           <FormGroup>
//             <Label for="radius">Populated within:</Label>
//             <Input
//               type="select"
//               id="radius"
//               value={radius}
//               onChange={(e) => setRadius(e.target.value)}
//             >
//               <option value="">Any</option>
//               <option value="30km">30km</option>
//               <option value="50km">50km</option>
//               <option value="100km">100km</option>
//             </Input>
//           </FormGroup>
//         </Col>
//         <Col md="2">
//           <Button color="primary" className="mt-4" onClick={handleSearch}>Search</Button>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col md="12">
//           <div className="ag-theme-alpine" style={{ height: '50vh', width: '100%' }}>
//             <AgGridReact
//               columnDefs={columnDefs}
//               rowData={rowData}
//               pagination={true}
//               paginationPageSize={10}
//             />
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default VolcanoListPage;
