import React from 'react'
import { FlatList, View, Text, StyleSheet } from "react-native";
import Card from './Card';

class List extends React.PureComponent {
    render() {
        const { title, content } = this.props

        return (
            <View style={styles.list}>
                <View>
                    <Text style={styles.text}>{title}</Text>
                </View>
                <View>
                    <FlatList
                        data={content}
                        horizontal={true}
                        renderItem={({ item }) => <Card item={item}></Card>}
                    >
                    </FlatList>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        marginTop: 20,
    },
    text: {
        marginTop: 20,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
})

export default List;