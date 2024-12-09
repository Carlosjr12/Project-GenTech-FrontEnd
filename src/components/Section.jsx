import { Button } from 'primereact/button';
import './section.css';

const Section = () => {
    const productsCollection = [
        {
            discount: "30% OFF",
            title: "Novo drop Supreme",
            image: "/public/collection-1.png",
            buttonText: "Comprar",
        },
        {
            discount: "30% OFF",
            title: "Coleção Adidas",
            image: "/public/collection-2.png",
            buttonText: "Comprar",
        },
        {
            discount: "30% OFF",
            title: "Novo Beats Bass",
            image: "/public/collection-3.png",
            buttonText: "Comprar",
        }
    ];

    const itemCollection = (item) => {
        return (
            <div className='flex'>
                <div className='relative'>
                    <img src={item.image} />
                </div>

                <div className="absolute">
                    <h3 className='m-3'>{item.discount}</h3>
                    <Button className='buttomItem'>{item.buttonText}</Button>
                </div>
            </div>
        );
    };

    return (
        <section>
            <div>
                <h3 className='my-3'>Coleções em destaque</h3>
            </div>
            <div className='flex flex-wrap justify-content-center gap-2'>
                {productsCollection.map((item, index) => (
                    <div key={index}>
                        {itemCollection(item)}
                    </div>
                ))}
            </div>
            <div>
                <h3 className='my-5 text-center'>Coleções em destaque</h3>
            </div>

        </section>
    );
}

export default Section;
