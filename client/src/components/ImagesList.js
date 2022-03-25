import React from 'react';

export const ImagesList = (props) => {


    console.log('props', props)

    return (
        <>
            {
            props.props.map(image => {
                        return (
                            <div>
                                <img className="logo" src={`${image.path}`} alt={'avatar'}/>
                                <div>Имя загруженного файла: {image.name}</div>
                                <div>Размер картинки: {(image.size/1048576).toFixed(2)} Mb</div>
                                <div>Описание картинки: {image.text}</div>
                            </div>
                        )
                    })


            }
            </>
    )
}