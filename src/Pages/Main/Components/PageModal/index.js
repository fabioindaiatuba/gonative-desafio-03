import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PointActions } from 'store/ducks/points';

import styles from './styles';

class PageModal extends Component {
  state = {
    repoNameInput: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerModal}>
          <Text style={styles.title}>Adicionar novo local</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Usuário no GitHub"
            underlineColorAndroid="transparent"
            placeholderTextColor="#333"
            value={this.state.repoNameInput}
            onChangeText={repoNameInput => this.setState({ repoNameInput })}
          />
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={[styles.button, styles.buttonCancel]}
              onPress={() => this.props.closeModal()}
              activeOpacity={0.6}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonAdd]}
              onPress={() => this.props.addPointRequest(this.state.repoNameInput)}
              activeOpacity={0.6}
            >
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  points: state.points,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PointActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PageModal);
