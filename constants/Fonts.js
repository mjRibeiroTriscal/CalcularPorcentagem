import * as Font from 'expo-font'

export function Fonts() {
    alert()
    Font.loadAsync({
        'AmaticSC-Bold': require('../assets/fonts/AmaticSC-Bold.ttf'),
        'AmaticSC-Regular': require('../assets/fonts/AmaticSC-Regular.ttf'),
        'Bangers-Regular': require('../assets/fonts/Bangers-Regular.ttf'),
        'CarterOne-Regular': require('../assets/fonts/CarterOne-Regular.ttf'),
        'Cinzel-Black': require('../assets/fonts/Cinzel-Black.ttf'),
        'Cinzel-Bold': require('../assets/fonts/Cinzel-Bold.ttf'),
        'Cinzel-Regular': require('../assets/fonts/Cinzel-Regular.ttf'),
        'PermanentMarker-Regular': require('../assets/fonts/PermanentMarker-Regular.ttf'),
        'SpecialElite-Regular': require('../assets/fonts/SpecialElite-Regular.ttf')
    })
}
