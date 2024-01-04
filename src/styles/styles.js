import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  subView: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchTxt: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  searchBtn: {
    padding: 8,
    backgroundColor: '#3498DB',
    borderRadius: 8,
  },
  searchViewTxt: {
    color: '#fff',
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  //Weather card Styles
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    margin: 12,
    backgroundColor: '#fff',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  temperature: {
    fontSize: 16,
    color: '#555',
  },
  condition: {
    fontSize: 16,
    color: '#555',
  },
  humidity: {
    fontSize: 16,
    color: '#555',
  },
});
