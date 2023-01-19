import {useEffect, useMemo, useState} from 'react';

import {Image} from 'react-native';

export const useImageAspect = (image: string | any, isAsset?: boolean) => {
  const [aspect, setAspect] = useState(1);

  const imgObj = useMemo(() => {
    if (image && isAsset) {
      const {width, height} = Image.resolveAssetSource(image);
      const assetAspect = width / height;
      return assetAspect;
    } else {
      return 1;
    }
  }, [image]);

  useEffect(() => {
    if (!isAsset) {
      Image.getSize(image, (w, h) => {
        setAspect(w / h);
      });
    }
  }, []);

  return isAsset ? imgObj : aspect;
};
