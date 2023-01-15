import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Nav from '../components/nav/Nav';
import Loader from '../components/misc/Loader';
import Message from '../components/misc/Message';
import Footer from '../components/misc/Footer';

import {
  listPropertyDetails,
  updateProperty,
} from '../actions/propertyActions';
import { PROPERTY_UPDATE_RESET } from '../constants/propertyConstants';
import properties from '../utils/data';

function PropertyEdit({ match, history }) {
  const { propertyId } = useParams();

  const [propertyType, setPropertyType] = useState('');
  const [rentOrBuy, setRentOrBuy] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  const [image5, setImage5] = useState('');
  const [rooms, setRooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [description, setDescription] = useState('');
  const [centralAir, setCentralAir] = useState(false);
  const [washerAndDryer, setWasherAndDryer] = useState(false);
  const [dishwasher, setDishwasher] = useState(false);
  const [microwave, setMicrowave] = useState(false);
  const [sqft, setSqft] = useState(0);
  const [fitnessCenter, setFitnessCenter] = useState(false);
  const [flooring, setFlooring] = useState('');
  const [location, setLocation] = useState('');
  const [petFriendly, setPetFriendly] = useState(false);
  const [security, setSecurity] = useState(false);
  const [handicap, setHandicap] = useState(false);
  const [avalibleUnits, setAvalibleUnits] = useState(0);
  const [yearBuilt, setYearBuilt] = useState(0);
  const [garageCapacity, setGarageCapacity] = useState(0);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  const propertyDetails = useSelector((state) => state.propertyDetails);
  const { error, loading, property } = propertyDetails;

  const propertyUpdate = useSelector((state) => state.propertyUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = propertyUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PROPERTY_UPDATE_RESET });
      history.push('/admin/propertylist');
    } else {
      if (!property.name || property.id !== Number(propertyId)) {
        dispatch(listPropertyDetails(propertyId));
      } else {
        setPropertyType(properties.propertyType);
        setRentOrBuy(properties.rentOrBuy);
        setPrice(properties.price);
        setImage(properties.image);
        setImage1(properties.image1);
        setImage2(properties.image2);
        setImage3(properties.image3);
        setImage4(properties.image4);
        setImage5(properties.image5);
        setRooms(properties.rooms);
        setBathrooms(properties.bathrooms);
        setDescription(properties.description);
        setCentralAir(properties.centralAir);
        setWasherAndDryer(properties.washerAndDryer);
        setDishwasher(properties.dishwasher);
        setMicrowave(properties.microwave);
        setSqft(properties.sqft);
        setFitnessCenter(properties.fitnessCenter);
        setFlooring(properties.flooring);
        setLocation(properties.location);
        setPetFriendly(properties.petFriendly);
        setSecurity(properties.security);
        setHandicap(properties.handicap);
        setAvalibleUnits(properties.avalibleUnits);
        setYearBuilt(properties.yearBuilt);
        setGarageCapacity(properties.garageCapacity);
      }
    }
  }, [dispatch, property, propertyId, history, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProperty({
        id: propertyId,
        propertyType,
        rentOrBuy,
        price,
        image,
        image1,
        image2,
        image3,
        image4,
        image5,
        rooms,
        bathrooms,
        description,
        centralAir,
        washerAndDryer,
        dishwasher,
        microwave,
        sqft,
        fitnessCenter,
        flooring,
        location,
        petFriendly,
        security,
        handicap,
        avalibleUnits,
        yearBuilt,
        garageCapacity,
      })
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('image', file);
    formData.append('image1', file);
    formData.append('image2', file);
    formData.append('image3', file);
    formData.append('image4', file);
    formData.append('image5', file);
    formData.append('propertyid', propertyId);

    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post(
        '/api/properties/upload/',
        formData,
        config
      );

      setImage(data);
      setImage1(data);
      setImage2(data);
      setImage3(data);
      setImage4(data);
      setImage5(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Edit Properties</title>
        <meta
          name="description property edit page realtors react-app"
          content="/"
        />
        <meta name="keywords" content="realtors, real estate, realty" />

        <link rel="stylesheet" href="../styles/Card.css" />
      </Helmet>
      <Nav />
      <div className="container pt-4">
        <Link className="btn btn-md" to="/admin/productlist">
          Go Back
        </Link>

        <div className="container">
          <h2>Edit Property</h2>
          {loadingUpdate && <Loader />}
          {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <form className="form text-center" onSubmit={submitHandler}>
              <h2>Property Type</h2>
              <input
                type="name"
                className="form-control bg-transparent text-black fw-bold"
                placeholder="Enter name"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              />

              <h2>Rent or Buy</h2>
              <input
                type="rentOrBuy"
                className="form-control bg-transparent text-black fw-bold"
                placeholder="Enter price"
                value={rentOrBuy}
                onChange={(e) => setRentOrBuy(e.target.value)}
              />
              <h2>Price</h2>
              <input
                type="price"
                className="form-control bg-transparent text-black fw-bold"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <h2>Image</h2>
              <input
                type="text"
                placeholder="Enter image"
                className="form-control bg-transparent text-black fw-bold"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />

              <h2>Image2</h2>
              <input
                type="text"
                placeholder="Enter image"
                className="form-control bg-transparent text-black fw-bold"
                value={image1}
                onChange={(e) => setImage1(e.target.value)}
              />
              <h2>Image2</h2>
              <input
                type="text"
                placeholder="Enter image"
                className="form-control bg-transparent text-black fw-bold"
                value={image2}
                onChange={(e) => setImage2(e.target.value)}
              />
              <h2>Image3</h2>
              <input
                type="text"
                placeholder="Enter image"
                className="form-control bg-transparent text-black fw-bold"
                value={image3}
                onChange={(e) => setImage3(e.target.value)}
              />
              <h2>Image4</h2>
              <input
                type="text"
                placeholder="Enter image"
                className="form-control bg-transparent text-black fw-bold"
                value={image4}
                onChange={(e) => setImage4(e.target.value)}
              />
              <h2>Image3</h2>
              <input
                type="text"
                placeholder="Enter image"
                className="form-control bg-transparent text-black fw-bold"
                value={image5}
                onChange={(e) => setImage5(e.target.value)}
              />
              {uploading && <Loader />}

              <h2>Bedrooms</h2>
              <input
                type="text"
                placeholder="Enter bedrooms"
                className="form-control bg-transparent text-black fw-bold"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              />
              <h2>Bathrooms</h2>
              <input
                type="text"
                placeholder="Enter bathrooms"
                className="form-control bg-transparent text-black fw-bold"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              />

              <h2>Description</h2>
              <input
                type="text"
                placeholder="Enter description"
                className="form-control bg-transparent text-black fw-bold"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <h2>central air</h2>
              <input
                type="text"
                placeholder="Enter"
                className="form-control bg-transparent text-black fw-bold"
                value={centralAir}
                onChange={(e) => setCentralAir(e.target.value)}
              />
              <h2>Washer & dryer</h2>
              <input
                type="text"
                placeholder="Enter"
                className="form-control bg-transparent text-black fw-bold"
                value={washerAndDryer}
                onChange={(e) => setWasherAndDryer(e.target.value)}
              />
              <h2>Dishwasher</h2>
              <input
                type="text"
                placeholder="Enter"
                className="form-control bg-transparent text-black fw-bold"
                value={dishwasher}
                onChange={(e) => setDishwasher(e.target.value)}
              />
              <h2>Microwave</h2>
              <input
                type="text"
                placeholder="Enter"
                className="form-control bg-transparent text-black fw-bold"
                value={microwave}
                onChange={(e) => setMicrowave(e.target.value)}
              />
              <h2>sqft</h2>
              <input
                type="text"
                placeholder="Enter"
                className="form-control bg-transparent text-black fw-bold"
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
              />
              <h2>Fitness</h2>
              <input
                type="text"
                placeholder="Enter"
                className="form-control bg-transparent text-black fw-bold"
                value={fitnessCenter}
                onChange={(e) => setFitnessCenter(e.target.value)}
              />
              <h2>Flooring</h2>
              <input
                type="text"
                placeholder="Enter"
                className="form-control bg-transparent text-black fw-bold"
                value={flooring}
                onChange={(e) => setFlooring(e.target.value)}
              />
              <h2>Location</h2>
              <input
                type="text"
                placeholder="Enter"
                className="form-control bg-transparent text-black fw-bold"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <h2>Pets</h2>
              <input
                type="text"
                placeholder="Enter"
                className="form-control bg-transparent text-black fw-bold"
                value={petFriendly}
                onChange={(e) => setPetFriendly(e.target.value)}
              />
              <h2>Security</h2>
              <input
                type="text"
                placeholder="Enter"
                className="form-control bg-transparent text-black fw-bold"
                value={security}
                onChange={(e) => setSecurity(e.target.value)}
              />
              <h2>Handicap accessible</h2>
              <input
                type="text"
                placeholder="Enter"
                className="form-control bg-transparent text-black fw-bold"
                value={handicap}
                onChange={(e) => setHandicap(e.target.value)}
              />
              <h2>avalible units</h2>
              <input
                type="text"
                placeholder="Enter"
                className="form-control bg-transparent text-black fw-bold"
                value={avalibleUnits}
                onChange={(e) => setAvalibleUnits(e.target.value)}
              />
              <h2>Year built</h2>
              <input
                type="text"
                placeholder="Enter"
                className="form-control bg-transparent text-black fw-bold"
                value={yearBuilt}
                onChange={(e) => setYearBuilt(e.target.value)}
              />
              <h2>Garage capacity</h2>
              <input
                type="text"
                placeholder="Enter"
                className="form-control bg-transparent text-black fw-bold"
                value={garageCapacity}
                onChange={(e) => setGarageCapacity(e.target.value)}
              />

              <button className="btn bt-md" type="submit">
                Update
              </button>
            </form>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PropertyEdit;
