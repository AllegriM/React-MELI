import { extendTheme } from "@chakra-ui/react"

export default extendTheme({
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        blue: '#3483fa',
        grey: '#EBEBEB'
    },
    components: {
        Progress: {
            baseStyle: {
                filledTrack: {
                    bg: '#3483fa'
                }
            }
        }
    }
})