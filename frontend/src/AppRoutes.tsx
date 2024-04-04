import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import { UserProfilePage } from "./pages/UserProfilePage";
import { PrivateRoute } from "./routes/PrivateRoute";
import { ExplorePage } from "./pages/ExplorePage";
import { SearchPage } from "./pages/SearchPage";
import { StoreDetailsPage } from "./components/RestaurantDetailPage/StoreDetailsPage";
export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage></HomePage>
            </Layout>
          }
        />
        <Route
          path="/discover"
          element={
            <Layout>
              <ExplorePage />
            </Layout>
          }
        />
        <Route
          path="/restaurants/:restaurantname"
          element={
            <Layout>
              <StoreDetailsPage />
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <SearchPage />
            </Layout>
          }
        />
        <Route element={<PrivateRoute />}>
          <Route
            path="/user/:activepage"
            element={
              <Layout>
                <UserProfilePage />
              </Layout>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
