import { ThemeConfig } from "antd";
import { colors, fontFamily, fontWeights } from "./variables";

/**
 * Theme configuration
 */
const theme: ThemeConfig = {
    token: {
        fontFamily,
        colorPrimary: colors.black,
        colorText: colors.black,
        colorBorder: colors.grey,
        borderRadius: 24,        
        colorLink: colors.black,
        lineWidth: 1,
        controlHeight: 40,
    },
    components: {
        Button: {
            algorithm: true,
            fontFamily,
            fontWeight: fontWeights.semiBold,
            fontSize: 14,
            paddingContentHorizontal: 24,
            lineWidth: 2,

            // primary button
            primaryColor: colors.white,
            colorPrimaryBorder: colors.transparent,
            primaryShadow: colors.transparent,

            // secondary button
            defaultColor: colors.black,
            defaultBorderColor: colors.black,
            defaultShadow: colors.transparent,
        },
        Input: {
            borderRadius: 12,
            paddingBlock: 12,
        },
        Select: {
            optionSelectedBg: colors.grey,
        }
    }
};

export default theme;