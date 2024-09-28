import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ProviderRouter } from "./providers/Provider.tsx";
import { store } from "./providers/store/store.ts";
import "./style/null.scss";

createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <ProviderRouter />
      </Provider>
    </BrowserRouter>
  </>
);
