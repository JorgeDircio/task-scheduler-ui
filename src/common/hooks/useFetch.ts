import { useState, useEffect } from 'react';
import { httpClient } from '../api/HttpClient';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    httpClient.get<T>(url)
      .then(res => mounted && setData(res.data))
      .catch(err => mounted && setError(err))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [url]);

  return { data, loading, error };
}
