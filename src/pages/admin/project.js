import React, { useEffect, useState } from "react"
import Admin from "@components/layout/admin"
import axios from "axios"
import { Link } from "gatsby"

function Project(props) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8088/project")
      .then(res => {
        const { data: responseData } = res

        setProjects(responseData.data)
      })
  }, [])

  const ProjectItem = ({ project }) => {
    return (
      <div className="bg-white rounded shadow-lg">
        <Link className="p-2 hover:bg-gray-300 block rounded-t" to={"/"}>{project.name}</Link>
        <div className="p-2 rounded-b">
          Ahihi
        </div>
      </div>
    )
  }

  return (
    <Admin>
      <div className="text-right mb-5">
        <button
          className="test">
          Button
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 z-20">
        {
          projects.map(item => <ProjectItem project={item} />)
        }
        {/*<div className="w-full mb-12 px-4">*/}
        {/*  <CardTable />*/}
        {/*</div>*/}
        {/*<div className="w-full mb-12 px-4">*/}
        {/*  <CardTable color="dark" />*/}
        {/*</div>*/}
      </div>
    </Admin>
  )
}

export default Project
