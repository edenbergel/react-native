import React from "react";
import { FlatList, StyleSheet, View, SafeAreaView } from "react-native";
import { Card } from "./Card";

export default class ListResult extends React.Component {
  render() {
    const { movies, onReachedEnd } = this.props;

    return (
      <SafeAreaView style={styles.Safe}>
        <View style={styles.container}>
          <FlatList
            ItemSeparatorComponent={({ highlighted }) => (
              <View
                style={[styles.separator, highlighted && { marginLeft: 0 }]}
              />
            )}
            style={{ flex: 1 }}
            data={movies}
            keyExtractor={(key) => String(key.id) + Math.random()}
            renderItem={(movie) => (
              <Card
                key={movie.item.id.toString() + Math.random()}
                posterUrl={movie.item.poster_path}
                movieTitle={movie.item.title}
                releaseDate={movie.item.release_date}
              />
            )}
            onEndReached={onReachedEnd}
            onEndReachedThreshold={0.8}
          />
        </View>
      </SafeAreaView> // remove it for android devices
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 0,
  },
  separator: {
    flex: 1,
  },

  Safe:{
      flex:1
  }
});
