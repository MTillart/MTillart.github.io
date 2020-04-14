export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "--text-primary": "#1853AB",
    "--text-secondary": "#000000",
    "--text-grey": "#E7E9F1",
    //"--foreground-quaternary": "#F4FAFF",
    //"--foreground-light": "#41474D",

    "--background-primary": "#d3d3d3",
    "--background-secondary": "#FEFEFE",
    //"--background-tertiary": "#5C7D99",
    //"--background-light": "#FFFFFF",

    "--grid-primary": "#B4B6BB",
    //"--primary-dark": "#24B286",
    //"--primary-light": "#B2FFE7",

    "--calender-bg": "#818A98",
    "--calender-text-primary": "#FFFFFF",
    "--calender-text-secondary": "#C2C8D2",
    "--calender-primary": "#4D6EA1",
    "--error-secondary": "#ffcecc",

    "--background-hover-shadow": "2px 4px 4px rgba(0, 0, 0, 0.40)"
  }
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--text-primary": "#F1F1F1",
    "--text-secondary": "#979090",
    "--text-grey": "#979090",
    //"--foreground-quaternary": "#E5E5E5",
    //"--foreground-light": "#FFFFFF",

    "--background-primary": "#6C6A6C",
    "--background-secondary": "#293D5A",
    //"--background-tertiary": "#08090A",
    //"--background-light": "#41474D",

    "--grid-primary": "#B4B6BB",
    // "--primary-dark": "#24B286",
    // "--primary-light": "#B2FFE7",

    "--calender-bg": "#818A98",
    "--calender-text-primary": "#FFFFFF",
    "--calender-text-secondary": "#C2C8D2",
    "--calender-primary": "#4D6EA1",
    "--error-secondary": "#ffcecc",

    "--background-hover-shadow": "2px 4px 4px rgba(255, 255, 255, 0.40)"
  }
};