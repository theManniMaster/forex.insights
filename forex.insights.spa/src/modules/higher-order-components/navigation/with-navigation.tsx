import { NavigateFunction, useNavigate } from "react-router-dom";

/**
 * Higher Order Component to add navigation.
 * @param Component
 */
function withNavigation<T extends WithNavigation>(Component: React.ComponentType<T>) {
    return (props: T) => {
        const navigate = useNavigate();

        return <Component {...props} navigate={navigate} />;
    }
}

/**
 * Interface to provide ts intellisense.
 */
interface WithNavigation {
    /**
     * Navigation function.
     */
    navigate: NavigateFunction;
}

export type { WithNavigation };
export default withNavigation;