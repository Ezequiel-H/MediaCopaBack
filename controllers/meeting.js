import { PLACES_KEYS } from "../constants/places.js";
import { mapBodyToMeeting } from "../mappers/meeting.js";
import Address from "../models/address.js";

export const getMeeting = async (req, res) => {
  // TODO: agregar al historial del usuario
  const { type, addresses } = await mapBodyToMeeting(req.body);

  const geoMiddlePoint = findMiddlePoint(addresses);
  var meetingAddress = {};
  if (type !== PLACES_KEYS.ADDRESS) {
    const place = await findPlace(type, geoMiddlePoint);
    meetingAddress = place._doc;
  } else {
    meetingAddress = await Address.create(geoMiddlePoint);
  }
  res.send(meetingAddress);
};

const calculateDistance = (place, middlePoint) => {
  const lonSquare = Math.pow(place.lon - middlePoint.lon, 2);
  const latSquare = Math.pow(place.lat - middlePoint.lat, 2);
  return { distance: Math.sqrt(lonSquare + latSquare), ...place };
};

const findPlace = async (type, middlePoint) => {
  const possiblePlaces = await Address.find({ type: type });
  return possiblePlaces.reduce(
    (minimumDistancePlace, newPlace) => {
      const newPlaceWithDistance = calculateDistance(newPlace, middlePoint);
      return newPlaceWithDistance.distance < minimumDistancePlace.distance
        ? newPlaceWithDistance
        : minimumDistancePlace;
    },
    { distance: 1000 }
  );
};

const findMiddlePoint = (addresses) => {
  const { sumLat, sumLon } = addresses.reduce(
    ({ sumLat, sumLon }, { lat, lon }) => ({
      sumLat: sumLat + lat,
      sumLon: sumLon + lon,
    }),
    { sumLat: 0, sumLon: 0 }
  );
  return { lat: sumLat / addresses.length, lon: sumLon / addresses.length };
};
