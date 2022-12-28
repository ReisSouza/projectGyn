import { Image, IImageProps, Skeleton } from "native-base";
import React from "react";

type AvatarProps = IImageProps & {
  size: number;
  isLoading?: boolean;
};

const Avatar: React.FC<AvatarProps> = ({
  size,
  isLoading = false,
  ...rest
}: AvatarProps) => {
  return isLoading ? (
    <Skeleton
      size={size}
      rounded="full"
      startColor="gray.500"
      endColor="gray.400"
    />
  ) : (
    <Image
      size={size}
      rounded="full"
      borderWidth="2"
      borderColor="gray.400"
      alt=""
      {...rest}
    />
  );
};
export default Avatar;
