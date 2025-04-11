import * as THREE from 'three';
import { useEffect, useState } from 'react';

function useLoaderManager() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const manager = new THREE.LoadingManager();

    manager.onProgress = (url, itemsLoaded, itemsTotal) => {
      setLoadingProgress((itemsLoaded / itemsTotal) * 100);
    };

    return () => {
      // dispose() çağrısı gerekmiyor
    };
  }, []);

  return loadingProgress;
}
