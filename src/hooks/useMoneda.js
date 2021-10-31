import React, {useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
	font-family: 'Bebas Neue', cursive;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	display: block;
	font-size: 2.4rem;
	margin-top: 2rem;
`;

const Select = styled.select`
	-webkit-appearance: none;
	border-radius: 8px;
	border: none;
	width: 100%;
	padding: 1rem;
	display: block;
	outline: none;
	font-size: 1rem;
`;

const useMoneda = (label, stateInicial, monedas) => {

	const [state, setState] = useState(stateInicial);

	const SelecMoneda = () => (
		<React.Fragment>
			<Label>{label}</Label>
			<Select
				onChange={e=>setState(e.target.value)}
				value={state}
			>
				<option value="">--Seleccione--</option>
				{
					monedas.map(moneda=>(
					<option
						key={moneda.codigo}
						value={moneda.codigo}
					>
						{moneda.nombre}
					</option>
				))
				}
			</Select>
		</React.Fragment>
	)

	return [state, SelecMoneda, setState];
}

export default useMoneda