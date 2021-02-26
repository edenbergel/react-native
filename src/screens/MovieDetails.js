import React, { useEffect, useRef, useState } from 'react';
import { Image, Animated } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View } from 'react-native';
import { Icon, Rating } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Easing } from 'react-native-reanimated';
import { getMovieDetailsFromApiAsync } from '../services/nettwork';

export const MovieDetails = ({ route, navigation }) => {
  const { id } = route.params;
  const [details, setDetails] = useState({});
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  
  useEffect(() => {
    getMovieDetailsFromApiAsync(id).then(data => {
      setDetails(data)
    });
    fadeIn();
  }, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3600,
      useNativeDriver: true
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true
    }).start();
  };

  return(
    <View style={styles.main_container}>
      {/* <Text>This is details View of Movie {id}</Text> */}
      <View style={styles.bg_image}>
      {
        details.poster_path ?
          <Animated.Image
            style={[styles.bgImg , {
              opacity: fadeAnim, // Bind opacity to animated value;
              flex: 1
            }]}
            resizeMode={'cover'}
            source={{uri : IMAGE_PATH+details.poster_path}} ></Animated.Image>

         :
        <Image
          style={styles.bgImg}
          resizeMode={'cover'}
          source={{uri : 'https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png'}} ></Image>
      }
      </View>
      <View style={styles.overview}>
        <View style={styles.moviesCover}>
        {details.backdrop_path ?
          <Image
            style={styles.img}
            resizeMode={'cover'}
            source={{uri : IMAGE_PATH+details.backdrop_path}} ></Image>
           :
          <Image
            style={styles.img}
            resizeMode={'cover'}
            source={{uri : 'https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png'}} ></Image>
        }

        </View>
        <View style={styles.movieDesc}>
          <Text style={[styles.bigTitle, styles.title]}>{details.title}</Text>
          <Text style={styles.subtitle}>{details.original_title}</Text>
          <Animated.View
          style={[
            {
              opacity: fadeAnim, // Bind opacity to animated value;
              flex: 1
            }
          ]}
        >
          <Rating
            type='star'
            ratingCount={5}
            imageSize={30}
            defaultRating={details.vote_count}
            minValue={0}
            style={styles.rating}
          />
        </Animated.View>
        </View>
        <View style={styles.playBtnContainer}>
          <TouchableOpacity style={styles.playBtn} onPress={() => console.log('playpressed')}>
            <Icon name="play" type="font-awesome" color="#fff" ></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={[styles.bigTitle, styles.descTitle]}>Synopsis</Text>
        <View style={styles.scrollingView}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.longDesc}>
              {details.overview}
            </Text>
          </ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <SafeAreaView style={styles.safeArea}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => console.log('visit link')}>
            <Text style={{color: '#fff'}}>Visit Website</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bigTitle: {
    fontWeight: 'bold',
    fontSize: 22
  },
  main_container: {
    flex: 1
  },
  bg_image: {
    flex: 2
  },
  description: {
    flex: 2,
    backgroundColor: '#fff',
    paddingHorizontal:10,
  },
  bgImg : {
    flex: 1
  },
  playBtn : {
    padding: 15,
    backgroundColor: '#F44802',
    borderRadius:30,
    height: 60,
    width:60,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  playBtnContainer : {
    position: 'absolute',
    right: 10,
    top: -30
  },
  overview: {
    flex: 1,
    paddingHorizontal:10,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  moviesCover: {
    width: 100,
    height: 120,
  },
  img: {
    flex: 1,
    width: 100,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#fff',
    position: 'absolute',
    height:150,
    top: -30,
  },
  movieDesc: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
  },
  subtitle: {
    fontWeight: '300',
    fontSize: 20
  },
  rating: {
    flex: 1,
    marginTop: 8
  },
  scrollView: {
    marginTop: 15,
    flex: 1
  },
  scrollingView: {
    height: 250
  },
  footer: {
    flex: 0.7,
    backgroundColor: '#fff'
  },
  btn : {
    backgroundColor: '#F44802',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  safeArea: {
    flex: 1, marginHorizontal: 10, justifyContent: 'center',
    backgroundColor: '#fff'
  }
})
