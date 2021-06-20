import React from 'react';

type StatusPriceProps = {
	value: number
}

const PriceFormat: React.FC<StatusPriceProps> = ({ value }: StatusPriceProps) => {

	return (
			<>
				{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)}
			</>
	);
}

export default PriceFormat;