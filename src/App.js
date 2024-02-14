import React, { Component } from 'react';
import './App.css';
import { GIFer } from 'components/GIFer';
import { create, draw, drawUrl } from './create';


class App extends Component {

    render() {
        return (
            <GIFer
                appId="planchabragas"
                loadingImageUrl={`${process.env.RESOURCES_URL}/planchabragas.png`}
                sourceImageUrl="./planchabragas.png"
                title='Plancha Bragas'
                create={create}
                deps={[draw, drawUrl]}
                lang='es'
                loadButtonText='Elegir&nbsp;cara'
                withCropper={true}
                editButtonText='Editar&nbsp;cara&nbsp;'
                defaultImgs={[
                    './pablo_fernandez.jpg',
                    './will_smith.jpg',
                    './dayo.jpg'
                ]}
                
            />
        )
    }
}

export default App;
