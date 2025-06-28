import React from "react";
import Layout from "../components/Layout/Layout";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <Layout title={"Dashboard -E Commerce app"}>
        <h1>Dashboard</h1>
      </Layout>
    </>
  );
};

export default Dashboard;
