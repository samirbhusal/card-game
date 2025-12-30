import apiClient from './apiClient';
import axios from 'axios'
import type { Pokemon, PokemonListResponse,  PokemonDetailResponse} from '../types/types.card';

export const fetchPokemon = async (limit: number = 12): Promise<Pokemon[]> => {
  // 1. Get the list of pokemon names/urls
  const { data } = await apiClient.get<PokemonListResponse>(`pokemon?limit=${limit}`);

  // 2. Fetch details for each pokemon in parallel
  const detailPromises = data.results.map((p) => axios.get<PokemonDetailResponse>(p.url));
  const responses = await Promise.all(detailPromises);

  // 3. Transform data into our clean Pokemon interface
  return responses.map((res) => ({
    id: res.data.id,
    name: res.data.name,
    image: res.data.sprites.other['official-artwork'].front_default,
  }));
};