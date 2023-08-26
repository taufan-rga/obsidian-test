import React from 'react';
import {Image, ImageProps} from 'react-native';
import {ImagePlaceholder} from '../../../assets/images';

interface PictureProps extends Omit<ImageProps, 'source'> {
  uri?: string;
}

function Picture({uri, ...props}: PictureProps) {
  return (
    <Image
      defaultSource={ImagePlaceholder}
      {...props}
      source={!uri ? ImagePlaceholder : {uri}}
    />
  );
}

export default Picture;
