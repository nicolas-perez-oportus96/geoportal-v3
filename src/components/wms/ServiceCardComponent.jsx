import React from 'react'

export default function ServiceCardComponent({ title, DescriptionComponent, wmsLink }) {

    const copyLinkToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(wmsLink);
            alert('Dirección WMS copiada al portapapeles');
        } catch (err) {
            alert('No se pudo copiar dirección: ' + err);
        }
    };

    return (
        <div className='layer-card'>
            <div style={{ display: 'flex' }}>
                {/* icono */}
                <div style={{ marginRight: '30px', marginLeft: '10px'}}>
                    <img src="/assets/wms-icon.png" alt="wms icon" width={50} />
                </div>

                {/* textos */}
                <div style={{ marginRight: '20px'}}>
                    <h3 style={{ marginBottom: '5px', color: '#4f4f8f' }}>{title}</h3>
                    <DescriptionComponent />
                </div>
            </div>


            <div>
                <button className='layer-button' onClick={copyLinkToClipboard}>
                    <img src="/assets/link.png" alt="link-icon" />
                    Copiar URL de servicio
                </button>
            </div>
        </div>
    )
}
