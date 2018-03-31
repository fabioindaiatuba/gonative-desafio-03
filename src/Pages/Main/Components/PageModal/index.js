import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PointActions } from 'store/ducks/points';

import styles from './styles';

class PageModal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    addPointRequest: PropTypes.func.isRequired,
    points: PropTypes.shape({
      loading: PropTypes.bool,
      errorOnAdd: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
  };
  state = {
    repoNameInput: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerModal}>
          <Text style={styles.title}>Adicionar novo local</Text>
          { !!this.props.points.errorOnAdd && (
            <Text style={styles.error}>{this.props.points.errorOnAdd}</Text>
          )}
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
              { this.props.points.loading
                ? <ActivityIndicator size="small" color="#999" />
                : <Text style={styles.buttonText}>Adicionar</Text>
              }
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
