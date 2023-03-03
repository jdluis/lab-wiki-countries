/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  const [country, setCountry] = useState(null);

  let { countryIdentification } = useParams();

  useEffect(() => {
    getCountryByCode();
  }, [countryIdentification]);

  const getCountryByCode = async () => {
    try {
      //me falla la forma de poner la variable en la peticion, si pongo eol nombre directo si me lo hace
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${countryIdentification}`
      );
      console.log(response.data);
      setCountry(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    /*   <!-- Country Details (Bootstrap column) --> */
    <>
      {country === null ? (
        'Loading...'
      ) : (
        <div key={country._id} className="col-7">
          <h1>{country.name.official}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{country.area}</td>
              </tr>
              <tr>
                <td>Region</td>
                <td>{country.region}</td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {country.borders.length === 0 ? (
                    'Only the Sea'
                  ) : (
                    <ul>
                      {country.borders.map((each) => {
                        return (
                          <li>
                            <a href={`/countryDetails/${each}`}>{each}</a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </td>
              </tr>
              <tr>
                <td>Languages:</td>
                <td>
                  <ul>
                    {Object.values(country.languages).map((each) => (
                      <li> {each} </li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Independient</td>
                <td>{country.independent ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default CountryDetails;
