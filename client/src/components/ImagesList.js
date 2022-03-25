import React from 'react';

export const ImagesList = (props) => {

    return (
        <>
                {props.props.map(image => {
                        return (
                            <div>
                                <div className="row">
                                    <div className="col s12 m7">
                                        <div className="card">
                                            <div className="card-image">
                                                <img className="logo" src={`${image.path}`} alt={'avatar'}/>
                                                    <span className="card-title">Описание картинки: {image.text}</span>
                                            </div>
                                            <div className="card-content">
                                                <p><div>Имя загруженного файла: {image.name}</div>
                                                    <div>Размер картинки: {(image.size/1048576).toFixed(2)} Mb</div></p>
                                            </div>
                                            <div className="card-action">
                                                <button className="btn waves-effect waves-light"
                                                ><i className="material-icons right">УДАЛИТЬ</i> </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
            }
            </>
    )
}