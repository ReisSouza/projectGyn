import { ScrollView, View, Image } from "native-base";
import React from "react";

import BackgroundImg from "@assets/background.png";

type ContainerProps = {
  children: React.ReactNode;
  isBackground?: boolean;
  isScrolling?: boolean;
};
const Container: React.FC<ContainerProps> = ({
  children,
  isBackground = false,
  isScrolling = false,
}: ContainerProps) => {
  return isScrolling ? (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View flex={1}>
        {isBackground && (
          <Image
            source={BackgroundImg}
            defaultSource={BackgroundImg}
            alt=""
            resizeMode="contain"
            position="absolute"
          />
        )}
        {children}
      </View>
    </ScrollView>
  ) : (
    <View flex={1}>
      {isBackground && (
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt=""
          resizeMode="contain"
          position="absolute"
        />
      )}
      {children}
    </View>
  );
};

export default Container;
