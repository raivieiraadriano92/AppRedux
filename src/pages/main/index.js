import React, { Component } from 'react';

import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    title: 'Main',
    header: null,
  };

  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <StatusBar barStyle="light-content" />

          <Text style={styles.title}>Gitmark</Text>
          <Text style={styles.description}>
            Comece adicionando alguns repositórios aos seus favoritos.
          </Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="usuário/repositório"
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => { }}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>Meus favoritos (3)</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Main;
