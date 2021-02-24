import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {Icon} from "react-native-elements";

export default class Search extends React.Component {
    render() {
        const {searchText, onSearch} = this.props;
        return (
            <View style={styles.main_container}>
                <View style={styles.searchContent}>
                    <Icon name='search' size={30}/>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={(text) => onSearch(text)}
                        placeholder='Titre du film'
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        padding: 15,
        backgroundColor: '#A1F5A5',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        
    },
    textinput: {
        height: 50,
        padding: 10,
       
        flex: 1
    },
    searchContent: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10
    },
    searchicon: {
        width: 30,
        height: 30,
        marginRight: 10
    }
})
