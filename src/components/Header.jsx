import LogoHeader from '../assets/logo-header.svg';
import MiniCart from '../assets/mini-cart.svg';
import { Sidebar } from 'primereact/sidebar';
import { Menu } from 'primereact/menu';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { InputText } from 'primereact/inputtext';



const Header = () => {
    const [showInput, setShowInput] = useState(false);
    const handleIconClick = () => {
        setShowInput(!showInput);
    };


    const [visible, setVisible] = useState(false);
    const items = [
        { label: 'Home' },
        { label: 'Produtos' },
        { label: 'Categorias' },
        { label: 'Meus Pedidos' }
    ];
    const logar = [
        { label: 'Cadastre-se' },
        { label: 'Entrar' }
    ]

    return (
        <header className='mt-2'>
            <div className='flex gap-3 align-items-center justify-content-center'>

                {/**Menu Small */}
                <div className='small-screen'>
                    <Sidebar visible={visible} onHide={() => setVisible(false)}>
                        <Menu model={items} className='w-full border-none' />
                        <Divider className='m-0' />
                        <Menu model={logar} className='w-full border-none' />
                    </Sidebar>
                    <Button className='button-menu-small' icon='pi pi-bars' onClick={() => setVisible(true)} />
                </div>

                {/** logo Header*/}
                <div>
                    <img src={LogoHeader} alt="logoHeader" />
                </div>

                {/** Search */}
                <div className='flex'>
                    <InputText className='large-screen col-12 ' placeholder="Pesquisar produto..." />
                    <Button
                        icon="pi pi-search"
                        className="p-button-rounded p-button-outlined small-screen"
                        onClick={handleIconClick}
                        text 
                    />
                </div>

                {/** logar */}
                <div className='large-screen'>
                    <Button label={logar[0].label} link onClick={() => window.open('#', '_blank')} />

                    <a href="#" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
                        {logar[1].label}
                    </a>
                </div>

                {/** Cart icon */}
                <div className='cart'>
                    <img src={MiniCart} className='static'/>
                    <Badge className='absolute top-0 mt-2 -ml-2'  value="2"></Badge>
                </div>
            </div>

            {/**Input search */}
            {showInput && (
                <div style={{ marginTop: '1rem'}} className=' small-screen text-center'>
                    <InputText placeholder="Pesquisar produto..." className='field col-12'/>
                </div>
            )}

            {/** Menu Large */}
            <div>
                <TabMenu model={items} className='large-screen' />
            </div>



        </header>
    );
}

export default Header;
