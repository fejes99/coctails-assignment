import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Glass {
  strGlass: string;
}

interface FetchGlassesResult {
  glasses: Glass[] | null;
  loading: boolean;
}

const useFetchGlasses = (): FetchGlassesResult => {
  const [result, setResult] = useState<FetchGlassesResult>({
    glasses: null,
    loading: true,
  });

  useEffect(() => {
    axios
      .get(`/list.php?g=list`)
      .then((response) => setResult({ glasses: response.data.drinks, loading: false }));
  }, []);

  return result;
};

export default useFetchGlasses;
