import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

class Card extends React.Component {
    render() {
        const { item } = this.props
        return (
            <TouchableOpacity style={styles.container}>
                <Image style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/w500/'+item.poster_path }} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        position: 'relative',
    },
    image: {
        width: 120,
        height: 200,
        borderRadius: 10,
    },
})

export default Card