import React from 'react';
import { View, Modal, Image } from 'react-native';
import PropTypes from 'prop-types';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PointActions } from 'store/ducks/points';

import PageModal from './Components/PageModal';
import styles from './styles';

const Main = ({ points, showModal }) => (
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
      onLongPress={data => showModal(data.nativeEvent.coordinate)}
    >
      { points.data.map(data => (
        <MapView.Marker
          key={String(data.id)}
          coordinate={{
            latitude: data.coordinate.latitude,
            longitude: data.coordinate.longitude,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
          title={data.name}
          description={data.bio}
        >
          <View>
            <Image source={{ uri: data.avatar }} style={styles.avatar} />
          </View>
        </MapView.Marker>
      ))}
    </MapView>

    <Modal
      animationType="slide"
      transparent
      visible={points.visibleModal}
      onRequestClose={() => {}}
    >
      <PageModal />
    </Modal>
  </View>
);

Main.propTypes = {
  points: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
    })),
  }).isRequired,
  showModal: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  points: state.points,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PointActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
