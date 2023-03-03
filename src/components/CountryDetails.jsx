/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const [country, setCountry] = useState(null);

  const countryIdentification = useParams();

  useEffect(() => {
    getCountryByCode();
  }, [countryIdentification]);

  const getCountryByCode = async () => {
    try {
      const response = await axios(
        `https://ih-countries-api.herokuapp.com/countries/${countryIdentification}`
      );
      console.log('AQUIUIIIIIIIIIIIIIIIIIIIIIIIIIIIIII');
      console.log(response.data);
      setCountry(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    /*   <!-- Country Details (Bootstrap column) --> */
    <>
      {country === null
        ? 'Loading...'
        : () => {
            return (
              <div className="col-7">
                <h1>France</h1>
                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td style={{ width: '30%' }}>Capital</td>
                      <td>Paris</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>
                        551695 km
                        <sup>2</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Borders</td>
                      <td>
                        <ul>
                          <li>
                            <a href="/AND">Andorra</a>
                          </li>
                          <li>
                            <a href="/BEL">Belgium</a>
                          </li>
                          <li>
                            <a href="/DEU">Germany</a>
                          </li>
                          <li>
                            <a href="/ITA">Italy</a>
                          </li>
                          <li>
                            <a href="/LUX">Luxembourg</a>
                          </li>
                          <li>
                            <a href="/MCO">Monaco</a>
                          </li>
                          <li>
                            <a href="/ESP">Spain</a>
                          </li>
                          <li>
                            <a href="/CHE">Switzerland</a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }}
    </>
  );
}

export default CountryDetails;
