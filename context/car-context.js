import React, { useState, useContext } from 'react'

const CarContext = React.createContext();

const SAMPLE_CAR = {
    color: 'red',
    engineDisplacement: '1800',
    fuel: 'Gasoline',
    id: 'toyota-corolla-cross-g',
    maker: "Toyota",
    model: "Corolla Cross",
    transmission: "CVT",
    variant: "G",
    year: "2022"
}

export const useCar = () => {
    return useContext(CarContext)
}

export const CarProvider = ({ children }) => {
    const [currentCar, setCurrentCar] = useState(SAMPLE_CAR);
    const userValues = {
        currentCar,
        setCurrentCar
    }

    return <CarContext.Provider value={userValues}>
        {children}
    </CarContext.Provider>
}