// src/hooks/usePets.js
import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage' 
import { PET_STATUS } from '../utils/constants';

export function usePets() {
  const [pets, setPets] = useLocalStorage('pawtrack_pets', []);

  // Modify the addPet function to handle image files
  const addPet = (petData) => {
    // If an image file is provided, convert it to a data URL
    if (petData.image instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPet = {
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          ...petData,
          imageUrl: reader.result, // Store the data URL
          image: null // Remove the original file object
        };
        setPets(prev => [...prev, newPet]);
      };
      reader.readAsDataURL(petData.image);
    } else {
      // If no image is provided, add the pet as usual
      const newPet = {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...petData,
        imageUrl: null,
      };
      setPets(prev => [...prev, newPet]);
    }
  };

  const updatePet = (id, updates) => {
    setPets(prev => prev.map(pet =>
      pet.id === id
        ? { ...pet, ...updates, updatedAt: new Date().toISOString() }
        : pet
    ));
  };

  const deletePet = (id) => {
    setPets(prev => prev.filter(pet => pet.id !== id));
  };

  const getPetById = (id) => {
    return pets.find(pet => pet.id === id);
  };

  const getLostPets = () => {
    return pets.filter(pet => pet.status === PET_STATUS.LOST);
  };

  const getFoundPets = () => {
    return pets.filter(pet => pet.status === PET_STATUS.FOUND);
  };

  const getReunitedPets = () => {
    return pets.filter(pet => pet.status === PET_STATUS.REUNITED);
  };

  const markAsReunited = (id, reunionStory = '') => {
    updatePet(id, {
      status: PET_STATUS.REUNITED,
      reunionStory,
      reunitedAt: new Date().toISOString()
    });
  };

  return {
    pets,
    addPet,
    updatePet,
    deletePet,
    getPetById,
    getLostPets,
    getFoundPets,
    getReunitedPets,
    markAsReunited
  };
}