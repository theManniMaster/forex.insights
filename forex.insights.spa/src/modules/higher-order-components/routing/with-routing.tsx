import { Params, useParams, useNavigate, NavigateFunction } from "react-router-dom";

/**
 * Higher Order Component to add routing.
 * @param Component
 */
function withRouting<T extends WithRouting>(Component: React.ComponentType<T>) {
    return (props: Omit<T, keyof WithRouting>) => {
        const params = useParams();
        const navigate = useNavigate();

        return <Component {...props as T} params={params} navigate={navigate} />
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

    /**
     * Navigation function.
     */
    navigate: NavigateFunction;
}

export type { WithRouting };
export default withRouting;