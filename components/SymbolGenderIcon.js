import * as React from 'react';
import { Foundation } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function SymbolGenderIcon(props) {
    return (
        <Foundation
            name={
                props.genero == 'male' ?
                    'male-symbol' :
                    props.genero == 'female' ?
                        'female-symbol' :
                        'timer-sand-empty'
            }
            size={props.size}
            color={
                props.genero == 'male' ?
                    Colors.SymbolGenderIconColorMale :
                    props.genero == 'female' ?
                        Colors.SymbolGenderIconColorFemale :
                        'timer-sand-empty'
            }
        />
    );
}
