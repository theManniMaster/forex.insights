import { ThemeConfig } from "antd";
import { colors, fontFamily, fontWeights } from "./variables";

/**
 * Theme configuration
 */
const theme: ThemeConfig = {
    token: {
        fontFamily,

        // buttons
        colorPrimary: colors.black,
        colorText: colors.black,
        colorBorder: colors.transparent,
        colorLink: colors.black,
        lineWidth: 2,
    },
    components: {
        Button: {
            algorithm: true,
            fontFamily,
            fontWeight: fontWeights.semiBold,
            borderRadius: 24,
            fontSize: 12,
            paddingContentHorizontal: 24,
            controlHeight: 40,

            // primary button
            primaryColor: colors.white,
            colorPrimaryBorder: colors.transparent,
            primaryShadow: colors.transparent,

            // secondary button
            defaultColor: colors.black,
            defaultBorderColor: colors.black,
            defaultShadow: colors.transparent,
            
        }
    }
};

export default theme;