import React, { useState } from "react";
import { ScrollView, useToast } from "native-base";
import * as ImagePicker from "expo-image-picker";

import { Container, Header } from "@components/index";
import { FormInforUser, ProfileAvatar } from "@features/index";
import * as FileSystem from "expo-file-system";

type ProfileProps = {};

const Profile: React.FC<ProfileProps> = ({}: ProfileProps) => {
  const [userPhoto, setUserPhoto] = useState<string | undefined>();
  const [photoLoading, setPhotoLoading] = useState<boolean>(false);
  const toast = useToast();

  const handleUserPhotoSelect = async () => {
    setPhotoLoading(true);
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
        selectionLimit: 1,
      });

      if (photoSelected.canceled) return;

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri
        );
        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          return toast.show({
            title: "Essa imagem é muito grande. Escolha uma de até 5MB.",
            placement: "top",
            bgColor: "red.500",
          });
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
    } finally {
      setPhotoLoading(false);
    }
  };

  return (
    <Container>
      <Header title="Perfil" />
      <ScrollView>
        <ProfileAvatar
          image={userPhoto}
          isLoading={photoLoading}
          onChangeImage={() => handleUserPhotoSelect()}
        />
        <FormInforUser />
      </ScrollView>
    </Container>
  );
};
export default Profile;
