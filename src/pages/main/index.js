import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from 'store/actions/favorites';

import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    title: 'Main',
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favoritesCount: PropTypes.number.isRequired,
  };

  state = {
    repoNameInput: 'RocketSeat/gonative-03',
  };

  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites');
  }

  addRepository = () => {
    if (!this.state.repoNameInput.length) {
      return;
    }

    this.props.addFavoriteRequest(this.state.repoNameInput);
  }

  render() {
    console.log(this.props);
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
              value={this.state.repoNameInput}
              onChangeText={repoNameInput => this.setState({ repoNameInput })}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={this.addRepository}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>Meus favoritos ({this.props.favoritesCount})</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  favoritesCount: state.favorites.length,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
