import React, { useContext, useEffect, useState } from "react";
import "../Css Files/OptimizeYourEnvironment.css";
import { Line, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

import axios from 'axios'
import { CropContext } from "../CropsContext";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);



const OptimizationSystem = () => {
    const [inputs, setInputs] = useState({
        floor: 1,
        area: "",
        balcony_size: "",
        devices: [],
    });

    const [altitude, setAltitude] = useState([])
    const [weather, setWeather] = useState([])

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [location, setLocation] = useState({});


    const [date, setDate] = useState({
        day: "",
        month: "",
        year: ""
    })
    const [usefulDate, setUsefulDate] = useState()
    const [startDate, setStartDate] = useState()
    const [didIt, setDidIt] = useState(false)
    const formatDate = (year, month, day) => {
        const paddedMonth = month.toString().padStart(2, "0");
        const paddedDay = day.toString().padStart(2, "0");
        return `${year}-${paddedMonth}-${paddedDay}`;
    };

    const [livingData, setLivingData] = useState([])

    const plantDatabase = useContext(CropContext)
    function recommendPlants(weatherData, balconyArea) {
        if (!Array.isArray(weatherData) || weatherData.length === 0) {
            throw new Error("Geçersiz hava durumu verisi sağlandı.");
        }

        console.log(plantDatabase)

        const reversedTemperatures = [...weatherData].reverse();

        const averageTemperature = (reversedTemperatures.reduce((sum, temp) => sum + temp, 0) / reversedTemperatures.length) + 1

        console.log("30 Yıllık Ortalama Sıcaklık:", averageTemperature);

        const suitablePlants = plantDatabase.filter(
            (plant) =>
              plant.preferredTemperature.min < averageTemperature &&
              plant.preferredTemperature.max > averageTemperature &&
              plant.spaceRequired < balconyArea - 5 &&
              plant.altitude.min < altitude &&
              plant.altitude.max + 1000 > altitude 
          );
          
          console.log(suitablePlants)
        if (suitablePlants.length === 0) {
            return [];
        }
        return suitablePlants.map((plant) => ({
            name: plant.name,
            description: plant.shortDescription,
            spaceRequirement: plant.spaceRequired,
            amount: Math.round((balconyArea - 5) / plant.spaceRequired)
        }));
    }
    useEffect(() => {
        const time = new Date();
        const currentDate = {
            day: time.getDate(),
            month: time.getMonth() + 1,
            year: time.getFullYear(),
        };
        setDate(currentDate);
        setUsefulDate(formatDate(currentDate.year, currentDate.month, currentDate.day));
        setStartDate(formatDate(currentDate.year - 30, currentDate.month, currentDate.day));
    }, []);

    useEffect(() => {
        const getLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            alert("Konum erişimi reddedildi. Lütfen tarayıcı ayarlarından konum iznini açın!");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            alert("Konum bilgisi alınamadı. Lütfen cihazınızın konum ayarlarını kontrol edin.");
                            break;
                        case error.TIMEOUT:
                            alert("Konum isteği zaman aşımına uğradı. Lütfen tekrar deneyin.");
                            break;
                        default:
                            alert("Bilinmeyen bir hata oluştu. Lütfen tekrar deneyin.");
                    }
                }
            );
        };

        getLocation();
    }, []);



    const fetchWeatherData = async (firstDate, lastDate) => {
        try {
            const response = await axios.get("https://archive-api.open-meteo.com/v1/archive", {
                params: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    start_date: firstDate,
                    end_date: lastDate,
                    daily: "temperature_2m_mean",
                    timezone: "UTC",
                },
            });
            console.log(response.data);
            setDidIt(true)
            setWeather(response.data)
            setAltitude(response.data.elevation)
        } catch (e) {
            console.error("Error fetching data:", e);
        }
    };

    useEffect(() => {
        console.log(location.longitude, location.latitude, usefulDate, startDate)
        if (location.latitude && location.longitude && usefulDate && startDate && !didIt) {
            console.log("Location and date set, fetching weather data...");
            const firstDate = startDate
            const lastDate = usefulDate
            fetchWeatherData(firstDate, lastDate);
        }
    },)

    const handleInputChange = (e, index, field) => {

        if (field) {
            const updatedDevices = [...inputs.devices];
            updatedDevices[index][field] = e.target.value;
            setInputs((prev) => ({ ...prev, devices: updatedDevices }));
        } else {
            const { name, value } = e.target;
            setInputs((prev) => ({ ...prev, [name]: value }));
        }
        console.log(inputs)
    };

    const createMoreDeviceAdder = () => {
        setInputs((prev) => ({
            ...prev,
            devices: [...prev.devices, { name: "", watt: 0, hours: 0 }],
        }));
    };

    const removeDevice = (index) => {
        setInputs((prev) => ({
            ...prev,
            devices: prev.devices.filter((_, i) => i !== index),
        }));
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 16,
                        family: "Arial",
                        style: "italic",
                    },
                    color: "black",
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 14,
                        family: "Courier New",
                    },
                    color: "black",
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 14,
                        family: "Courier New",
                    },
                    color: "black",
                },
            },
        },
    };
    const DeviceAdder = ({ device, index }) => {
        return (
            <div className="device-adder">
                <label>
                    Cihaz Adı
                    <input
                        className="device-input"
                        type="text"
                        defaultValue={device.name}
                        onBlur={(e) => handleInputChange(e, index, "name")}
                    />
                </label>
                <label>
                    Saatlik Watt
                    <input
                        className="device-input"
                        type="number"
                        defaultValue={device.watt}
                        onBlur={(e) => handleInputChange(e, index, "watt")}
                        required
                    />
                </label>
                <label>
                    Günlük Kullanım
                    <input
                        className="device-input"
                        type="number"
                        defaultValue={device.hours}
                        onBlur={(e) => handleInputChange(e, index, "hours")}
                        required
                    />
                </label>
                <button type="button" className="delete-btn" onClick={() => removeDevice(index)}>
                    Sil
                </button>
            </div>
        );
    };

    const handleSubmit = (e) => {
        const startDate = formatDate(date.year - 30, date.month, date.day);
        e.preventDefault();
        setLoading(true);
        setError(null);
        fetchBiodiversityData(location.latitude, location.longitude)
        let electricity = calculateElectricity(weather, inputs.devices, inputs.area)
        try {
            setTimeout(() => {
                setResponse({
                    altitude: altitude,
                    energy_usage: electricity,
                    avg_yearly_increase: -2.5,
                    projected_energy_usage: 88,
                });
                setLoading(false);
            }, 1000);
        } catch (err) {
            setError("An error occurred while processing the data.");
            setLoading(false);
        }
    };

    const generateEnergyUsageChartData = () => {
        if (!response) return {};
        return {
            labels: Array.from(
                { length: response.energy_usage.length },
                (_, i) => `Gün ${i + 1}`
            ),
            datasets: [
                {
                    label: "Enerji Kullanımı (kWh)",
                    data: response.energy_usage,
                    borderColor: "#92BDA3",
                    backgroundColor: "rgba(75,192,192,0.2)",
                    fill: true,
                },
            ],
        };
    };
    function estimateNext10Years(temperatureData) {
        const currentYear = new Date().getFullYear();
        const startYear = currentYear - 30;
        const endYear = currentYear;

        if (!Array.isArray(temperatureData) || temperatureData.length === 0) {
            throw new Error("Invalid temperature data provided.");
        }

        const totalDays = temperatureData.length;
        const totalYears = endYear - startYear + 1;
        const daysInYear = Math.floor(totalDays / totalYears);

        if (totalDays % totalYears !== 0) {
            console.warn(
                "Data might be incomplete or irregular for yearly division. Proceeding with approximate calculations."
            );
        }
        const yearlyAverages = [];
        for (let i = 0; i < totalYears; i++) {
            const startIndex = i * daysInYear;
            const yearData = temperatureData.slice(startIndex, startIndex + daysInYear);
            const yearlyAverage =
                yearData.reduce((sum, temp) => sum + temp, 0) / yearData.length;
            yearlyAverages.push(yearlyAverage);
        }


        const n = yearlyAverages.length;
        const x = Array.from({ length: n }, (_, i) => i + startYear);
        const y = yearlyAverages;

        const xMean = x.reduce((sum, xi) => sum + xi, 0) / n;
        const yMean = y.reduce((sum, yi) => sum + yi, 0) / n;

        let num = 0,
            den = 0;
        for (let i = 0; i < n; i++) {
            num += (x[i] - xMean) * (y[i] - yMean);
            den += (x[i] - xMean) ** 2;
        }

        const slope = num / den;
        const intercept = yMean - slope * xMean;


        const lapseRate = -6.5 / 1000;

        const next10Years = [];
        for (let i = endYear + 1; i <= endYear + 10; i++) {
            const predictedTemp = slope * i + intercept + lapseRate;
            next10Years.push(predictedTemp);
        }

        return next10Years;
    }

    const generateProjectedYearsChart = () => {
        if (
            !Array.isArray(weather.daily.temperature_2m_mean) ||
            weather.daily.temperature_2m_mean.length === 0
        ) {
            console.error("Invalid weather data:", weather.daily.temperature_2m_mean);
            return {};
        }

        if (isNaN(altitude)) {
            console.error("Invalid altitude:", altitude);
            return {};
        }

        function generateNext10Years() {
            const time = new Date();
            const year = time.getFullYear();
            const dateArray = [];
            for (let i = 1; i <= 10; i++) {
                dateArray.push(year + i);
            }
            return dateArray;
        }

        return {
            labels: generateNext10Years(),
            datasets: [
                {
                    label: "Tahmini Sıcaklıklar",
                    data: estimateNext10Years(weather.daily.temperature_2m_mean, altitude),
                    backgroundColor: "#92BDA3",
                    borderColor: "black",
                    borderWidth: 1,
                }
            ]
        };
    };

    const generateBiodiversityChartData = () => {
        if (!Array.isArray(livingData) || livingData.length === 0) {
            console.error("livingData is invalid:", livingData);
            return {};
        }
        return {
            labels: livingData.map((animal) => (animal.commonName.toUpperCase() === "Unknown" ? animal.species : animal.commonName.toUpperCase()) || animal.species || "Unknown"),
            datasets: [
                {
                    label: "Ne Kadar Sık",
                    data: livingData.map((animal) => animal.occurrences || 0),
                    backgroundColor: "#92BDA3",
                    borderColor: "black",
                    borderWidth: 1,
                },
            ],
        };
    };

    const fetchBiodiversityData = async (latitude, longitude, radius = 75) => {
        try {
            const response = await axios.get("https://api.inaturalist.org/v1/observations/species_counts", {
                params: {
                    lat: latitude,
                    lng: longitude,
                    radius,
                    per_page: 20,
                },
            });

            const speciesCounts = response.data.results.map((result) => ({
                species: result.taxon?.name || "Unknown",
                occurrences: result.count || 0,
                commonName: result.taxon?.preferred_common_name || "Unknown",
                rank: result.taxon?.rank || "Unknown",
                taxonId: result.taxon?.id,
            }));

            setLivingData(speciesCounts);
        } catch (error) {
            console.error("Error fetching biodiversity data:", error);
            setError("Failed to fetch biodiversity data.");
        }
    };



   
    function calculateElectricity(weatherData, devices, area) {
        if (isNaN(area) || area <= 0) {
            console.error("Invalid area:", area);
            return [];
        }

        const baseEnergy = area * 0.1;
        const hvacPowerPerM2 = 0.05;

        const deviceEnergy = devices.reduce((sum, device, index) => {
            const watt = parseFloat(device.watt < 0 ? 0 : device.watt);
            const hours = parseFloat(device.hours < 0 || device.hours > 24 ? 0 : device.hours);

            if (isNaN(watt) || isNaN(hours)) {
                console.warn(`Invalid device data at index ${index}:`, device);
                return sum;
            }

            return sum + (watt / 1000) * hours;
        }, 0);

        console.log("Device Energy:", deviceEnergy);

        const reversedTemperatures = [...(weatherData.daily?.temperature_2m_mean || [])].reverse();

        const daysIn10Months = 10 * 30;

        const last10MonthsTemperatures = reversedTemperatures.slice(0, daysIn10Months);

        const validTemperatures = last10MonthsTemperatures.filter((temp) => !isNaN(temp));

        if (validTemperatures.length === 0) {
            console.warn("No valid temperature data for the last 10 months.");
            return [];
        }

        const energyUsage = validTemperatures.map((entry) => {
            const tempDifference = Math.abs(20 - entry);

            return (
                baseEnergy +
                hvacPowerPerM2 * area * tempDifference / 24 +
                deviceEnergy
            );
        });

        console.log("Energy Usage for Last 10 Months:", energyUsage);
        return energyUsage;
    }
      

    return (

        <div className="optimize">
            <form onSubmit={handleSubmit}>
                <button type="button" className="add-device" onClick={createMoreDeviceAdder}>
                    Cihaz Ekle
                </button>
                <div id="device-adder-container">
                    {inputs.devices.map((device, index) => (
                        <DeviceAdder
                            key={index}
                            device={device}
                            index={index}
                        />
                    ))}
                </div>
                <div className="form-container">
                    <label>
                        <p>
                            Kaçıncı Kaçttasınız:
                        </p>
                        <input
                            className="optimize-input"
                            type="number"
                            name="floor"
                            value={inputs.floor}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        <p>
                            Alanınız (m²)
                        </p>

                        <input
                            className="optimize-input"
                            type="number"
                            name="area"
                            value={inputs.area}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        <p>
                            Balkon Alanı (m²):
                        </p>
                        <input
                            type="number"
                            name="balcony_size"
                            value={inputs.balcony_size}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <button type="submit" id="submit-btn" disabled={loading}>
                        {loading ? "Hesaplanıyor" : "Hesapla"}
                    </button>
                </div>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {response && (
                <div className="response-container">
                    <h2>Sonuçlar</h2>
                    <div className="crops-container">
                        {recommendPlants(weather.daily.temperature_2m_mean, inputs.balcony_size).map((plant, index) => {
                            return (
                                <li className="crop-li" key={index}>
                                    Bitki Adı: {plant.name}
                                    <br></br>
                                    Açıklama: {plant.description}
                                    <br></br>
                                    Bitki için Gerekli Alan: {plant.spaceRequirement}
                                    <br></br>
                                    Kaç Tane Ekebilirsin: {plant.amount}
                                </li>
                            )
                        })}
                    </div>
                    {response && response.energy_usage && (
                        <Line options={options} data={generateEnergyUsageChartData()} />
                    )}

                    {livingData && livingData.length > 0 && (
                        <Bar options={options} data={generateBiodiversityChartData()} />
                    )}

                    <Bar options={options} data={generateProjectedYearsChart()}></Bar>
                </div>
            )}
        </div>
    );
};

export default OptimizationSystem;
