// É recomendado o uso de fontes variáveis (https://fonts.google.com/variablefonts) para melhor performance

// Inter é uma fonte variável
import { Inter } from 'next/font/google';
import { Akshar } from 'next/font/google';

// Lusitana não é uma fonte variável
import { Lusitana } from 'next/font/google';


// ver (https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts)
// para uma melhor explicação sobre Google Fonts

// Em fontes variáveis não é necessário indicar o peso(weight) da fonte
export const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
});


// Em fontes não variáveis é obrigatório
export const lusitana = Lusitana({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
});

export const akshar = Akshar({
    subsets: ['latin'],
    display: 'swap'
});