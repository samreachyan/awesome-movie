import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import List from '../components/List';
import { getPopularMovie, getUpcomingMovie } from '../services/services';

const getScreen = Dimensions.get('screen');

function HomeScreen() {
    const [movieImage, setMovieImage] = useState('');
    const [popularMovie, setPopularMovie] = useState('');
    const [err, setErr] = useState(null);

    useEffect(() => {
        getUpcomingMovie().then(movie => {
            const movieArrayImage = []
            movie.forEach(movie => {
                movieArrayImage.push(`https://image.tmdb.org/t/p/w500/`+movie.poster_path)
            });
            setMovieImage(movieArrayImage);
        }).catch(err =>{
            setErr(err)
        });

        getPopularMovie().then(movie => {
            setPopularMovie(movie);
        }).catch(err =>{
            setErr(err)
        });

    }, []);

    return (
        <React.Fragment>
            <ScrollView>
                <View style={styles.container} >
                    <SliderBox 
                        images={movieImage}
                        dotStyle={ styles.silderStyle}
                        sliderBoxHeight={500}
                        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        autoplay={true}
                        circleLoop={true}
                    />                
                </View>
                <View style={styles.carousel}>
                    <List title="The Popular Movies" content={popularMovie} ></List>
                </View>
                <View style={styles.carousel}>
                    <List title="The Popular Movies" content={popularMovie} ></List>
                </View>
                <View style={styles.carousel}>
                    <List title="The Popular Movies" content={popularMovie} ></List>
                </View>
            </ScrollView>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    silderStyle : {
        height: 0,
    },
    carousel: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeScreen
