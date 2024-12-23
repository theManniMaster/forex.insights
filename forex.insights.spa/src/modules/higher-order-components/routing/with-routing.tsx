import { Params, useParams } from "react-router-dom";

/**
 * Higher Order Component to add routing.
 * @param Component
 */
function withRouting<T>(Component: React.ComponentType<T & WithRouting>) {
    return (props: T) => {
        const params = useParams();

        return <Component {...props} params={params} />;
    };
}

/**
 * Interface to provide ts intellisense.
 */
interface WithRouting {
    /**
     * Route params.
     */
    params: Params;
}

export type { WithRouting };
export default withRouting;