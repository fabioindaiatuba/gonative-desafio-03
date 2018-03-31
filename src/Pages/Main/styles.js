import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  avatar: {
    height: 32,
    width: 32,
    borderRadius: 16,
    borderWidth: 5,
    borderColor: colors.white,
  },
});

export default styles;
