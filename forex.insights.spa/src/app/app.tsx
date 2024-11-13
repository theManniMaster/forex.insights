import { Component } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

/**
 * Main application component.
 */
class App extends Component {
    render() {
        //return <ConfigProvider theme={theme}>
        //    <Row className={styles.container}>
        //        <Header />
        //        <DashboardPanel />
        //    </Row>
        //</ConfigProvider>;

        return <RouterProvider router={router} />
    }
}

export default App;