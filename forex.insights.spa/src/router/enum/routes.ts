const base = "/forex.insights/";

/**
 * Enum for routes.
 */
enum Routes {
    root = base,
    login = `${base}login`,
    register = `${base}register`,
    dashboard = `${base}dashboard`,
    create = `${base}create`,
    edit = `${base}edit`,
    feedback = `${base}feedback`,
    oops = `${base}oops`,
}

export default Routes;