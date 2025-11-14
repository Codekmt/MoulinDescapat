import React from 'react';
import grangeGarden from '../assets/img/grangeGarden.jpg'
import {Link} from 'react-router-dom';

const copainsDuMoulin = [
    {
        id: 1,
        title: 'Nathalie Yeung', 
        image: grangeGarden,
        alt: "image of Nathalie",
        role: 'Owner', 
        description: 'Apart from organizing and hosting she`s also a healer who specializes in foot reflexology en energy healings.',
        href: '',
    },
    {
        id: 2, 
        title: 'Keanu M. Teixeira',
        image: grangeGarden,
        alt: "image of Keanu",
        role: 'Web Developer', 
        description: 'Will design, develop and deploy your website.',
        href: 'keanumt.dev',
    },
    {
        id: 3, 
        title: 'Jules Fabry',
        image: grangeGarden,
        alt: "image of Jules",
        role: 'Musician', 
        description: 'Created and plays in the `reggers` group. All over France.',
        href: '',
    },
    {
        id: 4,
        title: 'Philia Fabry', 
        image: grangeGarden,
        alt: "image of Philia",
        role: 'Artist',
        description: 'Draws anything from a leaf to an universe, for any requests.',
        href: '',
    }

]

const Copains = ({cpms=copainsDuMoulin}) => {
    return (
        <section className='m-20 grid gap-6 grid-cols-2 lg:grid-cols-4'>
            {cpms.map((cpm, i) => (
                <section key ={i} className='lg:p-10 md:p-6 p-4'>
                    <img className='max-h-40 w-full object-cover' src={cpm.image} alt={cpm.alt} />
                    <h3>{cpm.title}</h3>
                    <h4>{cpm.role}</h4>
                    <p>{cpm.description}</p>
                    <Link href={cpm.href}>Read More</Link>
                </section>
            ))}
        </section>
    )
}

export default Copains;