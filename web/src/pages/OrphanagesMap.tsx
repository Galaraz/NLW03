import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus }  from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import { Container, ContentWrapper } from '../styles/pages/orphanages-map';

const mapBoxURL = `https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;

const OrphanagesMap = () => {
    return (
        <Container>
            <ContentWrapper>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escola um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :</p>
                </header>

                <footer>
                    <strong>Campo Grande</strong>
                    <span>Mato Grosso do Sul</span>
                </footer>
            </ContentWrapper>

            <Map 
                center={[-20.4517056,-54.5954657]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer 
                    url={mapBoxURL}
                />
            </Map>

            <Link to="" className="create-orphanages">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </Container>
    );
}

export default OrphanagesMap; 