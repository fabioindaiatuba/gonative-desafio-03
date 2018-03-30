import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PointActions } from 'store/ducks/points';

import PageModal from './Components/PageModal';
import styles from './styles';
/*
Chave google maps
AIzaSyCkNf8WqK4C_hCKJ3uoa0kKHKSzpCfpnZM
*/

class Main extends Component {

  state = {

  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
              latitude: -27.2177659,
              longitude: -49.6451598,
              latitudeDelta: 0.0042,
              longitudeDelta: 0.0031,
          }}
          style={styles.map}
          onLongPress={data => this.props.showModal(data.nativeEvent.coordinate)}
        >
          { this.props.points.data.map(data => (
            <MapView.Marker
              key={String(data.id)}
              coordinate={{
                latitude: data.coordinate.latitude,
                longitude: data.coordinate.longitude,
                latitudeDelta: 0.0042,
                longitudeDelta: 0.0031,
              }}
              title={data.name}
              description={data.login}
            />
          ))}
        </MapView>

        <Modal
          animationType="slide"
          transparent
          visible={this.props.points.visibleModal}
          onRequestClose={() => {}}
        >
          <PageModal />
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  points: state.points,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PointActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
