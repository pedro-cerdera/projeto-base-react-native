import React, { useRef, useState } from "react";
import { ImageBackground, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { connect } from "react-redux";

import {
  Button,
  DefaultSpacingContainer,
  OnboardingItem,
  SafeAreaContainer,
} from "components";
import { DEVICE_WIDTH, isSmallDevice, getImageSource } from "helpers";
import Colors from "styleguide/Colors";

// import { items, BackgroundImage, CTA } from "./constants";

import styles from "./styles";

const mapStoreToProps = store => ({
  configs: store.RemoteConfigReducer.configs,
});

const OnboardingScreen = ({ configs, navigation }) => {
  const [activeSlider, setActiveSlider] = useState(0);
  const carouselRef = useRef(null);

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <ImageBackground
        source={getImageSource("background")}
        style={styles.imageBackgroudContainer}
        blurRadius={2}
      >
        <LinearGradient
          colors={Colors.gradient[isSmallDevice ? "primary" : "primaryBig"]}
          locations={isSmallDevice ? [0, 1] : [0, 0.6, 1]}
          style={styles.homeContainer}
        >
          <SafeAreaContainer>
            <DefaultSpacingContainer disableBottomSpacing>
              <Carousel
                ref={carousel => (carouselRef.current = carousel)}
                data={(configs.onboarding && configs.onboarding.ITEMS) || []}
                loop
                autoplay
                lockScrollWhileSnapping
                autoplayDelay={1000}
                autoplayInterval={5000}
                renderItem={({ item }) => <OnboardingItem {...item} />}
                sliderWidth={DEVICE_WIDTH - 40}
                itemWidth={DEVICE_WIDTH - 40}
                onSnapToItem={setActiveSlider}
              />
              <Pagination
                dotsLength={
                  (configs.onboarding && configs.onboarding.ITEMS.length) || 0
                }
                activeDotIndex={activeSlider}
                dotColor={Colors.white}
                dotStyle={styles.dotStyle}
                inactiveDotColor={Colors.white}
                inactiveDotOpacity={0.4}
                inactiveDotScale={1}
                carouselRef={carouselRef.current}
                tappableDots={!!carouselRef.current}
              />
              <Button
                containerStyle={styles.button}
                theme={"outline"}
                color={"white"}
                onPress={() => navigation.navigate("Login")}
              >
                {configs.onboarding && configs.onboarding.CTA}
              </Button>
            </DefaultSpacingContainer>
          </SafeAreaContainer>
        </LinearGradient>
      </ImageBackground>
    </>
  );
};

OnboardingScreen.navigationOptions = {
  header: null,
};

export default connect(mapStoreToProps)(OnboardingScreen);
