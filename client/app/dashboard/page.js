import PrivateRoute from "@/components/PrivateRoute"
import { DashboardPage } from "@/components"
function Dashboard() {
  return (
    <PrivateRoute>
      <DashboardPage />
    </PrivateRoute>
  )
}

export default Dashboard