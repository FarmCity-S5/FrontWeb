import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './style/scss/main.css';
import {routes} from "./route";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) =>
            <Route
              key={"route-" + index}
              path={route.path}
              element={route.element}
            />
          )}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
