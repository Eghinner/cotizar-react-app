import React from 'react';
import styled from '@emotion/styled'
import imagen from './crypto.png'

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
    	</div>
    </Contenedor>
  );
}

export default App;