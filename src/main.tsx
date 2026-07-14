import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import {RouterProvider} from "react-router";
import {router} from "./router/router.tsx";
import {store} from "./hooks/store.ts";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
