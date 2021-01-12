import axios from "axios";
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout/admin";

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
      <div>
        <h1>Project list</h1>
        <ul>
          {
            projects.map(project => <ProjectItem key={project.id} project={project}></ProjectItem>)
          }
        </ul>
      </div>
    </Layout>
  )
}