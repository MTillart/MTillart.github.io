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

    "--background-primary": "#d3d3d3",
    "--background-secondary": "#FEFEFE",

    "--grid-primary": "#B4B6BB",
    // Calendar
    "--calendar-bg": "#818A98",
    "--calendar-text-primary": "#FFFFFF",
    "--calendar-text-secondary": "#C2C8D2",
    "--calendar-primary": "#4D6EA1",
    "--error-secondary": "#ffcecc",
    //Shadows
    "--background-hover-shadow": "2px 4px 4px rgba(0, 0, 0, 0.40)"
  }
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--text-primary": "#F1F1F1",
    "--text-secondary": "#979090",
    "--text-grey": "#979090",

    "--background-primary": "#6C6A6C",
    "--background-secondary": "#293D5A",

    "--grid-primary": "#B4B6BB",
    //Calendar
    "--calendar-bg": "#818A98",
    "--calendar-text-primary": "#FFFFFF",
    "--calendar-text-secondary": "#C2C8D2",
    "--calendar-primary": "#4D6EA1",
    "--error-secondary": "#ffcecc",
    // Shadows
    "--background-hover-shadow": "2px 4px 4px rgba(255, 255, 255, 0.40)"
  }
};