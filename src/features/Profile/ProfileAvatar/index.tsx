import Avatar from "@components/Avatar";
import { Center, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

type ProfileAvatarProps = {
  image: string | undefined;
  isLoading: boolean;
  onChangeImage: () => void;
};

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  image,
  isLoading,
  onChangeImage,
}: ProfileAvatarProps) => {
  return (
    <Center mt={6} mb={2}>
      <Avatar
        isLoading={isLoading}
        size={33}
        source={{ uri: image }}
        alt="Image do usuario"
      />
      <TouchableOpacity onPress={onChangeImage}>
        <Text color="green.500" fontSize="md" fontFamily="body" mt="2" mb="8">
          Alterar imagem
        </Text>
      </TouchableOpacity>
    </Center>
  );
};
export default ProfileAvatar;
