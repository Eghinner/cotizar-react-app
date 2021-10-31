import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import imagen from './crypto.png';
import Formulario from './components/Formulario.js';
import Cotizacion from './components/Cotizacion.js';
import Spinner from './components/Spinner.js';
import axios from 'axios';

const Contenedor=styled.div`
max-width: 900px;
margin: 0 auto;
@media(min-width: 992px){
	display: grid;
	grid-template-columns: repeat(2,1fr);
	column-gap: 2rem;
}
`;

const Imagen = styled.img`
max-width: 100%;
margin-top: 5rem;
`;

const Heading = styled.h1`
font-family: 'Bebas Neue', cursive;
font-weight: 600;
/*text-align: center;*/
color: #fff;
font-size: 50px;
border-top: 80px;
margin-bottom: 50px;

&::after{
	content: '';
	width: 100px;
	height: 6px;
	background-color: #66A2FE;
	display: block;
}
`;

function App() {

	const [moneda, setMoneda] = useState('');
	const [cryptomoneda, setCrypto] = useState('');
	const [resultado, guardarResultado] = useState({});
	const [cargando, setCargando] = useState(false)

	useEffect(() => {
		// Evita la primera ejecucion
		if (moneda==='') return;
		// Obteniendo api cotizacion
		const CotizaCrypto = async () => {
			const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`;
			const resultado = await axios.get(url);
			setCargando(true);
			setTimeout(()=>{
				setCargando(false);
				guardarResultado(resultado.data.DISPLAY[cryptomoneda][moneda]);
			},2000)

		}
		CotizaCrypto();

	}, [moneda, cryptomoneda]);

	const component = (cargando)
	? <Spinner/> :
	<Cotizacion
		resultado={resultado}
	/>;

	return (
		<Contenedor>
			<div>
				<Imagen
					alt='imagen crypto'
					src={imagen}
				/>
			</div>
			<div>
				<Heading>Cotiza cryptomonedas al instante</Heading>
				<Formulario
					setCrypto={setCrypto}
					setMoneda={setMoneda}
				/>

				{component}
			</div>
			</Contenedor>
			);
}

export default App;