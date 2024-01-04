import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {
  fetchWeatherData,
  geoLocationWeatherData,
} from '../services/weatherService';
import WeatherCard from '../components/WeatherCard';
import axios from 'axios';
import { styles } from '../styles/styles';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');
  const [liveLocationData, setLiveLocationData] = useState(null);

  useEffect(() => {
    fetchData('Bangalore'); // Default location
  }, []);

  const fetchData = async location => {
    try {
      const data = await fetchWeatherData(location);
      setWeatherData(data);
      setLiveLocationData('Bangalore(Default) Location'); // Reset live location data if fetched successfully
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setLiveLocationData('Bangalore(Default) Location'); // Set a flag to indicate using live location
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    Keyboard.dismiss(); // Hide keyboard on search

    if (searchLocation.trim() !== '') {
      setLoading(true);

      let locationData = await geoLocationWeatherData(searchLocation);
      setWeatherData(locationData);
      setLoading(false);
    }
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.subView}>
        <TextInput
          style={styles.searchTxt}
          placeholder="Enter location"
          value={searchLocation}
          onChangeText={text => {
            setLiveLocationData(null);
            setSearchLocation(text);
          }}
        />
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={handleSearch}>
          <Text
            style={styles.searchViewTxt}>
            Search
          </Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={weatherData}
          keyExtractor={item => item.dt.toString()}
          renderItem={({item}) => (
            <WeatherCard
              day={item.dt_txt}
              temperature={item.main.temp}
              condition={item.weather[0].description}
              humidity={item.main.humidity}
            />
          )}
        />
      )}

      <Text>{liveLocationData}</Text>
    </View>
  );
};

export default HomeScreen;
