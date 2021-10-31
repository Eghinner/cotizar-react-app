import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda.js';
import useCrypto from '../hooks/useCrypto.js';
import Error from './Error.js';
import axios from 'axios';

// Estilos con @emotion/styles
const Boton = styled.input`
	margin-top: 20px;
	font-weight: bold;
	font-size: 20px;
	padding: 10px;
	border: none;
	width: 100%;
	border-radius: 8px;
	color: #fff;
	background-color: #66A2FE;
	transition: background-color .5s ease;
	&:hover{
		background-color: #326ac0;
		cursor: pointer;
	}
`;

// Inicio del componente
const Formulario = ({setCrypto,setMoneda}) => {

	// monedas para select
	const monedas = [
		{codigo:'VES', nombre:'Bolivar'},
		{codigo:'COP', nombre:'Peso Colombiano'},
		{codigo:'USD', nombre:'Dolar Americano'},
		{codigo:'EUR', nombre:'Euro'},
		{codigo:'JPY', nombre:'Yen'},
		{codigo:'KRW', nombre:'Won'},
		{codigo:'BRL', nombre:'Real brasileño'},
		{codigo:'ARS', nombre:'Peso argentino'},
		{codigo:'CLP', nombre:'Peso Chileno'}
	];

	const [listacrypto, guardarCrypto] = useState([]);
	const [error, setError] = useState(false)

	// Llamando al Costom hook useMoneda
	const [moneda, SelectMoneda] = useMoneda('Elige moneda', '', monedas);

	// Llamando al Costom hook useCrypto
	const [criptomoneda, SelectCrypto] = useCrypto('Elige criptomoneda', listacrypto);

	useEffect(() => {
		const ConsultarApi = async () => {
			const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
			const resultado = await axios.get(url);
			guardarCrypto(resultado.data.Data)
		}
		ConsultarApi()
	}, [])

	const handleSubmit = e =>{
		e.preventDefault();
		// Validacion
		if (moneda.trim()===''||criptomoneda.trim()==='') {
			setError(true);
			return null;
		} else setError(false);

		setMoneda(moneda);
		setCrypto(criptomoneda);
	}

	return (
		<form
			onSubmit={handleSubmit}
		>
		{ error ?
			<Error mensaje='Todos los campos son obligatorios'/>
			: null
		}

			<SelectMoneda
			/>
			<SelectCrypto
			/>
			<Boton
				type='submit'
				value='Calcular'
			/>
		</form>
	)
}

export default Formulario