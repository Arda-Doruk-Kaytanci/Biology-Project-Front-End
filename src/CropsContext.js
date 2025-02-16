import React, { createContext } from "react";

import domates from "./Images/plants/domates.png"
import salatalik from "./Images/plants/salatalık.png"
import biber from "./Images/plants/biber.png"
import marul from "./Images/plants/marul.png"
import patlican from "./Images/plants/patlıcan.png"
import kabak from "./Images/plants/kabak.png"
import fasulye from "./Images/plants/fasulye.png"
import bezelye from "./Images/plants/bezelye.png"
import havuc from "./Images/plants/havuç.png"
import turp from "./Images/plants/turp.png"
import sogan from "./Images/plants/soğan.png"
import sarimsak from "./Images/plants/sarımsak.png"
import ispanak from "./Images/plants/ıspanak.png"
import brokoli from "./Images/plants/brokoli.png"
import lahana from "./Images/plants/lahana.png"
import pancar from "./Images/plants/pancar.png"
import patates from "./Images/plants/patates.png"
import cilek from "./Images/plants/çilek.png"
import kinoa from "./Images/plants/kinoa.png"
import roka from "./Images/plants/roka.png"
import nane from "./Images/plants/nane.png"
import maydanoz from "./Images/plants/maydonoz.png"
import dereotu from "./Images/plants/dereotu.png"
import feslegen from "./Images/plants/fesleğen.png"
import kekik from "./Images/plants/kekik.png"
import biberiye from "./Images/plants/biberiye.png"
import adacayi from "./Images/plants/adaçayı.png"
import lavanta from "./Images/plants/lavanta.png"
import zerdecal from "./Images/plants/zerdeçal.png"
import zencefil from "./Images/plants/zencefil.png"
import papatya from "./Images/plants/papatya.png"
import melisa from "./Images/plants/melisa.png"
import bruksellahanasi from "./Images/plants/brüksel.png"
import mercimek from "./Images/plants/mercimek.png"
import nohut from "./Images/plants/nohut.png"
import barbunya from "./Images/plants/barbunya.png"
import bakla from "./Images/plants/bakla.png"
import pirasa from "./Images/plants/pırasa.png"
import rezene from "./Images/plants/rezene.png"
import kivirciklahana from "./Images/plants/kıvırcık.png"
import semizotu from "./Images/plants/semizotu.png"
import frenksogani from "./Images/plants/frenk.png"
import defne from "./Images/plants/defne.png"
import reyhan from "./Images/plants/reyhan.png"
import suteresi from "./Images/plants/suteresi.png"
import bogurtlen from "./Images/plants/böğürtlen.png"
import ahududu from "./Images/plants/ahududu.png"
import mantar from "./Images/plants/mantar.png"
import kirizilahana from "./Images/plants/kırmızı.png"
import enginar from "./Images/plants/enginar.png"

export const CropContext = createContext();
const Crops = [
    { name: "Domates", scientificName: "Solanum lycopersicum", preferredTemperature: { min: 20, max: 28 }, wateringPerDay: 0.45, maintenanceCost: 15, efficiency: 8, altitude: { min: 0, max: 1000 }, src: domates, lightRequired: "Full sun", spaceRequired: 0.5, description: "Küçük kaplarda verimli yetişir." },
    { name: "Salatalık", scientificName: "Cucumis sativus", preferredTemperature: { min: 18, max: 26 }, wateringPerDay: 0.40, maintenanceCost: 12, efficiency: 8, altitude: { min: 0, max: 800 }, src: salatalik, lightRequired: "Full sun", spaceRequired: 0.8, description: "Sürgünleri için destek gerekir, saksıda iyi verir." },
    { name: "Biber", scientificName: "Capsicum annuum", preferredTemperature: { min: 20, max: 30 }, wateringPerDay: 0.50, maintenanceCost: 15, efficiency: 7, altitude: { min: 0, max: 1000 }, src: biber, lightRequired: "Full sun", spaceRequired: 0.5, description: "Küçük saksılarda rahatça yetişir." },
    { name: "Marul", scientificName: "Lactuca sativa", preferredTemperature: { min: 15, max: 22 }, wateringPerDay: 0.35, maintenanceCost: 10, efficiency: 9, altitude: { min: 0, max: 600 }, src: marul, lightRequired: "Partial sun", spaceRequired: 0.3, description: "Hızlı büyür, küçük kaplarda ideal." },
    { name: "Patlıcan", scientificName: "Solanum melongena", preferredTemperature: { min: 22, max: 30 }, wateringPerDay: 0.55, maintenanceCost: 18, efficiency: 6, altitude: { min: 0, max: 800 }, src: patlican, lightRequired: "Full sun", spaceRequired: 0.7, description: "Düşük verimli çeşitler için uygun." },
    { name: "Kabak", scientificName: "Cucurbita pepo", preferredTemperature: { min: 20, max: 28 }, wateringPerDay: 0.50, maintenanceCost: 12, efficiency: 8, altitude: { min: 0, max: 800 }, src: kabak, lightRequired: "Full sun", spaceRequired: 1.0, description: "Dwarf çeşitler tercih edilmeli." },
    { name: "Fasulye", scientificName: "Phaseolus vulgaris", preferredTemperature: { min: 20, max: 30 }, wateringPerDay: 0.45, maintenanceCost: 10, efficiency: 7, altitude: { min: 0, max: 1000 }, src: fasulye, lightRequired: "Full sun", spaceRequired: 0.5, description: "Asma şeklinde büyüyen türler saksıda yetişir." },
    { name: "Bezelye", scientificName: "Pisum sativum", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.40, maintenanceCost: 8, efficiency: 8, altitude: { min: 0, max: 1000 }, src: bezelye, lightRequired: "Full sun", spaceRequired: 0.4, description: "Dikey destekle saksıda yetiştirilebilir." },
    { name: "Havuç", scientificName: "Daucus carota", preferredTemperature: { min: 16, max: 24 }, wateringPerDay: 0.30, maintenanceCost: 8, efficiency: 9, altitude: { min: 0, max: 1200 }, src: havuc, lightRequired: "Full sun", spaceRequired: 0.3, description: "Küçük saksılarda kısa çeşitler iyi verir." },
    { name: "Turp", scientificName: "Raphanus sativus", preferredTemperature: { min: 15, max: 22 }, wateringPerDay: 0.30, maintenanceCost: 8, efficiency: 8, altitude: { min: 0, max: 800 }, src: turp, lightRequired: "Full sun", spaceRequired: 0.3, description: "Hızlı hasat, az yer kaplar." },
    { name: "Soğan", scientificName: "Allium cepa", preferredTemperature: { min: 12, max: 24 }, wateringPerDay: 0.30, maintenanceCost: 8, efficiency: 8, altitude: { min: 0, max: 1200 }, src: sogan, lightRequired: "Full sun", spaceRequired: 0.3, description: "Küçük kaplarda kolayca yetişir." },
    { name: "Sarımsak", scientificName: "Allium sativum", preferredTemperature: { min: 10, max: 24 }, wateringPerDay: 0.30, maintenanceCost: 8, efficiency: 8, altitude: { min: 0, max: 1200 }, src: sarimsak, lightRequired: "Full sun", spaceRequired: 0.3, description: "Saksıda yetiştirmek için ideal." },
    { name: "Ispanak", scientificName: "Spinacia oleracea", preferredTemperature: { min: 10, max: 20 }, wateringPerDay: 0.35, maintenanceCost: 8, efficiency: 8, altitude: { min: 0, max: 800 }, src: ispanak, lightRequired: "Partial sun", spaceRequired: 0.4, description: "Serin iklimde hızlı büyür." },
    { name: "Brokoli", scientificName: "Brassica oleracea italica", preferredTemperature: { min: 16, max: 24 }, wateringPerDay: 0.45, maintenanceCost: 15, efficiency: 7, altitude: { min: 0, max: 1200 }, src: brokoli, lightRequired: "Full sun", spaceRequired: 0.7, description: "Mini brokoli çeşitleri saksıda yetişir." },
    { name: "Lahana", scientificName: "Brassica oleracea capitata", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.45, maintenanceCost: 12, efficiency: 7, altitude: { min: 0, max: 1200 }, src: lahana, lightRequired: "Full sun", spaceRequired: 0.8, description: "Mini lahana türleri için uygun." },
    { name: "Pancar", scientificName: "Beta vulgaris", preferredTemperature: { min: 16, max: 26 }, wateringPerDay: 0.40, maintenanceCost: 10, efficiency: 8, altitude: { min: 0, max: 1200 }, src: pancar, lightRequired: "Full sun", spaceRequired: 0.4, description: "Küçük saksılarda yetiştirilir." },
    { name: "Patates", scientificName: "Solanum tuberosum", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.60, maintenanceCost: 15, efficiency: 7, altitude: { min: 200, max: 1500 }, src: patates, lightRequired: "Full sun", spaceRequired: 1.0, description: "Saksı torbalarında yetiştirilebilir." },
    { name: "Çilek", scientificName: "Fragaria × ananassa", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.40, maintenanceCost: 15, efficiency: 8, altitude: { min: 0, max: 800 }, src: cilek, lightRequired: "Full sun", spaceRequired: 0.3, description: "Asılı saksılarda verimli yetişir." },
    { name: "Kinoa", scientificName: "Chenopodium quinoa", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.50, maintenanceCost: 20, efficiency: 8, altitude: { min: 0, max: 1000 }, src: kinoa, lightRequired: "Full sun", spaceRequired: 0.4, description: "Küçük bitki, saksıda kolay yetişir." },
    { name: "Roka", scientificName: "Eruca sativa", preferredTemperature: { min: 10, max: 20 }, wateringPerDay: 0.30, maintenanceCost: 10, efficiency: 8, altitude: { min: 0, max: 800 }, src: roka, lightRequired: "Partial sun", spaceRequired: 0.3, description: "Hızlı büyür ve az yer kaplar." },
    { name: "Nane", scientificName: "Mentha spicata", preferredTemperature: { min: 10, max: 25 }, wateringPerDay: 0.40, maintenanceCost: 12, efficiency: 8, altitude: { min: 0, max: 800 }, src: nane, lightRequired: "Partial sun", spaceRequired: 0.3, description: "Yoğun yayılır, saksıda kontrol edilebilir." },
    { name: "Maydanoz", scientificName: "Petroselinum crispum", preferredTemperature: { min: 10, max: 25 }, wateringPerDay: 0.40, maintenanceCost: 12, efficiency: 8, altitude: { min: 0, max: 800 }, src: maydanoz, lightRequired: "Partial sun", spaceRequired: 0.3, description: "Küçük kaplarda yetiştirmek idealdir." },
    { name: "Dereotu", scientificName: "Anethum graveolens", preferredTemperature: { min: 10, max: 25 }, wateringPerDay: 0.40, maintenanceCost: 12, efficiency: 8, altitude: { min: 0, max: 800 }, src: dereotu, lightRequired: "Full sun", spaceRequired: 0.3, description: "Kolayca yetişir, hafif aromalı." },
    { name: "Fesleğen", scientificName: "Ocimum basilicum", preferredTemperature: { min: 20, max: 30 }, wateringPerDay: 0.50, maintenanceCost: 15, efficiency: 8, altitude: { min: 0, max: 800 }, src: feslegen, lightRequired: "Full sun", spaceRequired: 0.4, description: "Küçük kaplarda verimli yetişir, mutfakta kullanılır." },
    { name: "Kekik", scientificName: "Thymus vulgaris", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.40, maintenanceCost: 12, efficiency: 8, altitude: { min: 0, max: 800 }, src: kekik, lightRequired: "Full sun", spaceRequired: 0.3, description: "Saksıda kolayca yetişir, aromatik yapısı vardır." },
    { name: "Biberiye", scientificName: "Rosmarinus officinalis", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.40, maintenanceCost: 15, efficiency: 8, altitude: { min: 0, max: 800 }, src: biberiye, lightRequired: "Full sun", spaceRequired: 0.5, description: "Düşük boylu, saksıda verimli yetişir." },
    { name: "Adaçayı", scientificName: "Salvia officinalis", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.40, maintenanceCost: 15, efficiency: 8, altitude: { min: 0, max: 800 }, src: adacayi, lightRequired: "Full sun", spaceRequired: 0.4, description: "Saksıda kolayca yetiştirilebilir, sağlık açısından faydalı." },
    { name: "Lavanta", scientificName: "Lavandula angustifolia", preferredTemperature: { min: 15, max: 30 }, wateringPerDay: 0.30, maintenanceCost: 18, efficiency: 8, altitude: { min: 0, max: 800 }, src: lavanta, lightRequired: "Full sun", spaceRequired: 0.5, description: "Dekoratif ve hoş kokulu, saksıda yetişir." },
    { name: "Zerdeçal", scientificName: "Curcuma longa", preferredTemperature: { min: 25, max: 35 }, wateringPerDay: 0.70, maintenanceCost: 25, efficiency: 6, altitude: { min: 0, max: 800 }, src: zerdecal, lightRequired: "Full sun", spaceRequired: 0.6, description: "Sıcak iklimlerde saksıda yetiştirilir, baharat olarak kullanılır." },
    { name: "Zencefil", scientificName: "Zingiber officinale", preferredTemperature: { min: 25, max: 35 }, wateringPerDay: 0.70, maintenanceCost: 25, efficiency: 6, altitude: { min: 0, max: 800 }, src: zencefil, lightRequired: "Partial sun", spaceRequired: 0.6, description: "Nemli koşullar altında saksıda yetiştirilebilir." },
    { name: "Papatya", scientificName: "Matricaria chamomilla", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.30, maintenanceCost: 10, efficiency: 9, altitude: { min: 0, max: 800 }, src: papatya, lightRequired: "Full sun", spaceRequired: 0.3, description: "Dekoratif ve rahatlatıcı çiçek, küçük saksılarda yetişir." },
    { name: "Melisa", scientificName: "Melissa officinalis", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.30, maintenanceCost: 10, efficiency: 9, altitude: { min: 0, max: 800 }, src: melisa, lightRequired: "Partial sun", spaceRequired: 0.3, description: "Rahatlatıcı koku verir, küçük saksılarda ideal." },
    { name: "Brüksel Lahanası", scientificName: "Brassica oleracea gemmifera", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.50, maintenanceCost: 20, efficiency: 7, altitude: { min: 200, max: 1200 }, src: bruksellahanasi, lightRequired: "Full sun", spaceRequired: 0.7, description: "Mini türleri saksıda yetiştirilebilir." },
    { name: "Mercimek", scientificName: "Lens culinaris", preferredTemperature: { min: 18, max: 26 }, wateringPerDay: 0.40, maintenanceCost: 14, efficiency: 8, altitude: { min: 0, max: 1000 }, src: mercimek, lightRequired: "Full sun", spaceRequired: 0.4, description: "Küçük saksılarda kolayca yetişir." },
    { name: "Nohut", scientificName: "Cicer arietinum", preferredTemperature: { min: 20, max: 28 }, wateringPerDay: 0.45, maintenanceCost: 15, efficiency: 7, altitude: { min: 0, max: 1000 }, src: nohut, lightRequired: "Full sun", spaceRequired: 0.4, description: "Deneysel olarak saksıda yetiştirilebilir." },
    { name: "Barbunya", scientificName: "Phaseolus coccineus", preferredTemperature: { min: 20, max: 30 }, wateringPerDay: 0.45, maintenanceCost: 16, efficiency: 7, altitude: { min: 0, max: 1000 }, src: barbunya, lightRequired: "Full sun", spaceRequired: 0.5, description: "Dikey büyüyen çeşitler saksıda yetiştirilebilir." },
    { name: "Bakla", scientificName: "Vicia faba", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.50, maintenanceCost: 16, efficiency: 7, altitude: { min: 0, max: 1000 }, src: bakla, lightRequired: "Full sun", spaceRequired: 0.5, description: "Saksıda yetiştirilmesi mümkündür." },
    { name: "Pırasa", scientificName: "Allium porrum", preferredTemperature: { min: 10, max: 20 }, wateringPerDay: 0.45, maintenanceCost: 18, efficiency: 7, altitude: { min: 0, max: 1000 }, src: pirasa, lightRequired: "Full sun", spaceRequired: 0.5, description: "Uzun, dar saksılar tercih edilmeli." },
    { name: "Rezene", scientificName: "Foeniculum vulgare", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.50, maintenanceCost: 17, efficiency: 7, altitude: { min: 0, max: 800 }, src: rezene, lightRequired: "Full sun", spaceRequired: 0.4, description: "Küçük saksılarda verimli yetişir." },
    { name: "Kıvırcık Lahana", scientificName: "Brassica oleracea var. capitata f. rubra", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.70, maintenanceCost: 13, efficiency: 7, altitude: { min: 0, max: 1000 }, src: kivirciklahana, lightRequired: "Full sun", spaceRequired: 0.7, description: "Mini türleri saksıda yetiştirilebilir." },
    { name: "Semizotu", scientificName: "Portulaca oleracea", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.40, maintenanceCost: 12, efficiency: 8, altitude: { min: 0, max: 800 }, src: semizotu, lightRequired: "Full sun", spaceRequired: 0.3, description: "Hızlı büyür, az yer kaplar." },
    { name: "Frenk Soğanı", scientificName: "Allium schoenoprasum", preferredTemperature: { min: 10, max: 25 }, wateringPerDay: 0.35, maintenanceCost: 14, efficiency: 8, altitude: { min: 0, max: 800 }, src: frenksogani, lightRequired: "Full sun", spaceRequired: 0.3, description: "Küçük, kolay yetişen bir soğan çeşididir." },
    { name: "Defne", scientificName: "Laurus nobilis", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.40, maintenanceCost: 16, efficiency: 7, altitude: { min: 0, max: 800 }, src: defne, lightRequired: "Full sun", spaceRequired: 0.4, description: "Küçük boylu defne fidanları saksıda yetişir." },
    { name: "Reyhan", scientificName: "Ocimum gratissimum", preferredTemperature: { min: 20, max: 30 }, wateringPerDay: 0.50, maintenanceCost: 15, efficiency: 8, altitude: { min: 0, max: 800 }, src: reyhan, lightRequired: "Full sun", spaceRequired: 0.4, description: "Yumuşak dokulu, lezzetli yapraklı." },
    { name: "Su Teresi", scientificName: "Nasturtium officinale", preferredTemperature: { min: 10, max: 20 }, wateringPerDay: 0.35, maintenanceCost: 12, efficiency: 8, altitude: { min: 0, max: 800 }, src: suteresi, lightRequired: "Partial sun", spaceRequired: 0.3, description: "Saksıda kolayca yetişir, besleyici." },
    { name: "Enginar", scientificName: "Cynara scolymus", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.55, maintenanceCost: 20, efficiency: 7, altitude: { min: 0, max: 800 }, src: enginar, lightRequired: "Full sun", spaceRequired: 0.8, description: "Mini enginar türleri saksıda yetiştirilebilir." },
    { name: "Böğürtlen", scientificName: "Rubus fruticosus", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.40, maintenanceCost: 16, efficiency: 8, altitude: { min: 0, max: 800 }, src: bogurtlen, lightRequired: "Full sun", spaceRequired: 0.5, description: "Kompakt çeşitleri saksıda yetiştirilebilir." },
    { name: "Ahududu", scientificName: "Rubus idaeus", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.40, maintenanceCost: 16, efficiency: 8, altitude: { min: 0, max: 800 }, src: ahududu, lightRequired: "Full sun", spaceRequired: 0.5, description: "Küçük saksılarda verimli yetişir." },
    { name: "Kırmızı Lahana", scientificName: "Brassica oleracea capitata f. rubra", preferredTemperature: { min: 15, max: 25 }, wateringPerDay: 0.70, maintenanceCost: 13, efficiency: 7, altitude: { min: 0, max: 1000 }, src: kirizilahana, lightRequired: "Full sun", spaceRequired: 0.7, description: "Mini kırmızı lahana saksıda yetiştirilebilir." },
    { name: "Mantar", scientificName: "Agaricus bisporus", preferredTemperature: { min: 15, max: 22 }, wateringPerDay: 0.30, maintenanceCost: 10, efficiency: 9, altitude: { min: 0, max: 800 }, src: mantar, lightRequired: "Partial sun", spaceRequired: 0.3, description: "Özel kitlerle saksıda yetiştirilebilir." }
  ];
  
function CropContextProvider({children}) {
  return (
    <>
      <CropContext.Provider value={Crops}>{children}</CropContext.Provider>
    </>
  );
}

export default CropContextProvider;
