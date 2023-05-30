import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
      lighter:{
        primary: string;
        success: string;
        warning: string;
        error: string;
        info: string;
      },
      gradients:{
        1: string,
        2: string,
        3: string,
        4: string,
        5: string,
        6: string,
        7: string,
        8: string,
        9: string,
        10: string
      },
      grayScale: {
        100: string
      }
    }
    interface ThemeOptions {
        lighter?:{
            primary?: string;
            success?: string;
            warning?: string;
            error?: string;
            info?: string;
        };
        gradients?:{
            1?: string,
            2?: string,
            3?: string,
            4?: string,
            5?: string,
            6?: string,
            7?: string,
            8?: string,
            9?: string,
            10?: string
        },
        grayScale?:{
            100?: string
        }
    }
}

export const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        light: "#3987FF",
        main: "#1A75FF",
        dark: "#0061F4"
      },
      success: {
        light: "#51FD00",
        main: "#44D600",
        dark: "#3BB900"
      },
      warning: {
        light: "#FFAF39",
        main: "#FFA31A",
        dark: "#F49200"
      },
      error: {
        light: "#FF395C",
        main: "#FF1A43",
        dark: "#F4002C"
      },
      info: {
        light: "#4ECAFF",
        main: "#33C2FF",
        dark: "#0AB6FF"
      },
      common:{
        white: "#FFFFFF",
        black: "#223354"
      },
    },
    grayScale:{
        100: '#DADADA'
    },
    lighter:{
        primary: "#E8F1FF",
        success: "#ECFBE6",
        warning: "#FFF6E8",
        error: "#FFE8EC",
        info: "#EBF9FF"
    },
    gradients:{
        1: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
        2: "linear-gradient(135deg, #FCCF31 0%, #F55555 100%)",
        3: "linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)",
        4: "linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)",
        5: "linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)",
        6: "linear-gradient(135deg, #FFF720 0%, #3CD500 100%)",
        7: "linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)",
        8: "linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)",
        9: "linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)",
        10:"linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)"
    },

    /*shape:{
        borderRadius: 
    }*/
});