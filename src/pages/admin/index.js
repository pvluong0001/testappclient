import axios from "axios";
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout/admin";

import CardPageVisits from "@templates/Cards/CardPageVisits";
import CardSocialTraffic from "@templates/Cards/CardSocialTraffic";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8088/project")
      .then(res => {
        const {data: responseData} = res;

        setProjects(responseData.data);
      })
  }, [])

  const ProjectItem = ({project}) => {
    return <li>{project.name}</li>
  }

  return (
    <Layout>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </Layout>
  )
}