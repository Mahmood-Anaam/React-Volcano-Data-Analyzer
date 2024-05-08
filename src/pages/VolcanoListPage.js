// VolcanoListPage.js
import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // ملفات CSS الأساسية لـ AG Grid
import 'ag-grid-community/styles/ag-theme-alpine.css'; // نمط مظهر "Alpine"
import '../styles/VolcanoListPage.css';

const VolcanoList = () => {
  // إعداد عمود الجدول وبيانات الصفوف
  const [columnDefs] = useState([
    { headerName: 'Name', field: 'name' },
    { headerName: 'Location', field: 'location' },
    { headerName: 'Last Eruption', field: 'lastEruption' },
    { headerName: 'Elevation (m)', field: 'elevation' },
  ]);

  const [rowData, setRowData] = useState([]);

  // جلب بيانات البراكين (يمكنك تغيير URL حسب API الفعلي أو مصدر البيانات)
  useEffect(() => {
    fetch('https://api.example.com/volcanoes')
      .then((response) => response.json())
      .then((data) => setRowData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="ag-theme-alpine volcano-list-container">
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  );
};

export default VolcanoList;
