import React, { useState } from "react";
import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import CostumerSignup from "./components/CostumerSignup"
import PemilikKosSignup from "./components/PemilikKosSignup"
import Login from "./components/Login"
import Sidebar from "./components/Sidebar";
import Register from "./components/Register";
import BottomNav from "./components/BottomNav";
import './App.css';
import Topbar from './components/Topbar';
import Order from "./pages/Order";
import TheMapComponent from './components/TheMapComponent';
import Listings from "./pages/Listings";
import ListingDetail from "./pages/ListingDetail";
import ListingOwnerDetail from "./pages/ListingOwnerDetail";
import ListingAdd  from "./pages/ListingsAdd";
import ListingUpdate from "./pages/ListingUpdate";
import ProfileOwner from "./pages/ProfileCostOwner";
import ProfileCustomer from "./pages/ProfileCustomer";
import DataTable from "./pages/DataKos.jsx";
import DataTableApprove from "./pages/DataKosApprove";
import DataTableUser from "./pages/DataKosUser";
import Footer from "./components/Footer";
import WhatsAppButton from"./components/WhatsApps"
import RiwayatTransaksi from "./pages/RiwayatTransaksi";


function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
          <div className="app">
            <Sidebar className="sidebar" isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />        
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/costumer/signup" element={<CostumerSignup />} />
                  <Route path="/pemilikKos/signup" element={<PemilikKosSignup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/listings" element={<Listings />} />                
                  <Route path="/register" element={<Register />} />
                  <Route path="/coba" element={<TheMapComponent />} />
                  <Route path="/order/:id" element={<Order />} />
                  <Route path="/profileOwner" element={<ProfileOwner />} />
                  <Route path="/profileCustomer" element={<ProfileCustomer />} />
                  <Route path="/listings/:id" element={<ListingDetail />} />
                  <Route path="/listingadd" element={<ListingAdd />} />
                  <Route path="/listingupdate" element={<ListingUpdate />} />
                  <Route path="/listingsOwner/:id" element={<ListingOwnerDetail />} />
                  <Route path="/datakos" element={<DataTable />} />
                  <Route path="/datakosApprove/:id" element={<DataTableApprove />} />
                  <Route path="/datakosUser/:id" element={<DataTableUser />} />
                  <Route path="/riwayatTransaksi" element={<RiwayatTransaksi />} />

                </Routes>
                <BottomNav />
                {/* <Footer /> */}
              </main>            
          </div>      
    
  );
}

export default App;
