// pages/index.js
'use client'
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaCartPlus, FaRocket, FaSync, FaUsers } from 'react-icons/fa';

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
 
    useEffect(() => {
      document.title = 'لوحة التحكم'; // Set your desired title here
    }, []);
  
  const cardData = [
    { title: 'بطاقة 1', description: 'وصف للبطاقة 1' },
    { title: 'بطاقة 2', description: 'وصف للبطاقة 2' },
    { title: 'بطاقة 3', description: 'وصف للبطاقة 3' }
  ];

  const jsonData = [
    { id: 1, name: 'جون دو', status: 'فعال', date: '2023-01-01', gender: 'ذكر' },
    { id: 2, name: 'جين دو', status: 'غير فعال', date: '2023-02-01', gender: 'أنثى' },
    // Add more data as needed
  ];

  const columns = [
    { name: 'الرقم', selector: row => row.id, sortable: true },
    { name: 'الاسم', selector: row => row.name, sortable: true },
    { name: 'الحالة', selector: row => row.status, sortable: true },
    { name: 'التاريخ', selector: row => row.date, sortable: true },
    { name: 'الجنس', selector: row => row.gender, sortable: true },
  ];
  

  return (
    <Container>
      <h1>لوحة التحكم</h1>

      {/* Cards */}
      <div className="container">
      <div className="row">
        <div className="col-md-4 col-xl-4">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20">المستخدمين
              </h6>
              <h2 className="text-right">
                <FaUsers className="f-left" />
                <span>486</span>
              </h2>
             
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-4">
          <div className="card bg-c-green order-card">
            <div className="card-block">
              <h6 className="m-b-20">المشتركين </h6>
              <h2 className="text-right">
                <FaRocket className="f-left" />
                <span>486</span>
              </h2>
            
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-4">
          <div className="card bg-c-yellow order-card">
            <div className="card-block">
              <h6 className="m-b-20">طلبات الألتحاق
              </h6>
              <h2 className="text-right">
                <FaSync className="f-left" />
                <span>486</span>
              </h2>
            
            </div>
          </div>
        </div>


      </div>
    </div>

      {/* Data Table */}
      {isMounted && (
        <DataTable
          title="بيانات المستخدمين"
          columns={columns}
          data={jsonData}
          pagination
          sortactive={true}
        />
      )}
      
    </Container>
  );
};

export default Home;
