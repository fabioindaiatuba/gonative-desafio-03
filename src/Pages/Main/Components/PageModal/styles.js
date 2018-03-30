import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkTransparent,
  },
  containerModal: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: metrics.basePadding,
    padding: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
  },
  title: {
    color: colors.darker,
    fontSize: 18,
  },
  input: {
    width: '100%',
    height: 42,
    marginTop: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    borderColor: colors.light,
    borderWidth: 1,
    fontSize: 14,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
  },
  button: {
    flex: 1,
    height: 52,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.baseMargin,
  },
  buttonCancel: {
    marginRight: 15,
    backgroundColor: colors.secundary,
  },
  buttonAdd: {
    backgroundColor: colors.success,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});

export default styles;
