import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function HumanGenderIcon(props) {
	return (
		<MaterialCommunityIcons
			name={props.genero == 'male' ? 'human-male' : props.genero == 'female' ? 'human-female' : 'timer-sand-empty'}
			size={props.size}
			color={props.color == 'initialColor' ? Colors.HumanGenderIconInitialColor : Colors.HumanGenderIconColor}
		/>
	);
}
