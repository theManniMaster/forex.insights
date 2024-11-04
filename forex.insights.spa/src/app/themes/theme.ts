import { ThemeConfig } from "antd";
import { colors, fontFamily, fontWeights } from "./variables";

/**
 * Theme configuration
 */
const theme: ThemeConfig = {
    token: {
        colorPrimary: colors.black,
    },
    components: {
        Button: {
            algorithm: true,
            fontFamily,
            fontWeight: fontWeights.semiBold,
            colorText: colors.white,
            borderRadius: 24,
            fontSize: 12,
            paddingContentHorizontal: 24,
            controlHeight: 48,
        }
    }
};

export default theme;