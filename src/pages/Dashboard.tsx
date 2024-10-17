import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/signin");
    }
  })
  return (
    <></>
  )
}

export default Dashboard