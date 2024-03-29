interface Theme {
    primaryLight: string,
    secondaryLight: string,
    primaryDark: string,
    secondaryDark: string,
    primaryAlert: string,
    secondaryAlert: string
}

export const theme: Theme = {
    primaryLight: 'white',
    secondaryLight: 'rgb(82,138,183)',
    primaryDark: 'rgb(45,51,90)',
    secondaryDark: 'black',
    primaryAlert: 'rgb(226, 106, 106)', // Sunglo Red (Softer)
    secondaryAlert: 'rgb(246, 71, 71)' // Sunset Orange (Darker)
}