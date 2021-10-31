import React from 'react'
import styled from '@emotion/styled';

const Alert = styled.div`
	background-color: #b7322c;
	padding: 1rem;
	color: white;
	font-size: 20px;
	text-transform: uppercase;
	font-weight: bold;
	text-align: center;
	font-family: 'Bebas Neue';
	letter-spacing: 2px;
	word-spacing: 5px;
`;

const Error = ({mensaje}) => {
	return (
		<Alert>
			{mensaje}
		</Alert>
	)
}

export default Error