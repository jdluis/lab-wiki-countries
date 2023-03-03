import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CountriesList() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    /*  <!-- Countries List (Bootstrap column) --> */
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries === null
          ? 'Loading...'
          : countries.map((each) => {
              return (
                <Link
                  key={each._id}
                  className="list-group-item list-group-item-action"
                  to={`/countryDetails/${each.alpha3Code}`}
                >
                  <img alt={each.name.common} src={'https://flagpedia.net/data/flags/icon/72x54/' + each.alpha2Code.toLowerCase() + '.png'}/>
                  <h4> {each.name.common}</h4>
                </Link>
              );
            })}
      </div>
    </div>
  );
}

export default CountriesList;
