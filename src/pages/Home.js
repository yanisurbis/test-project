import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import queryString from 'query-string';
import { Link, navigate } from '@reach/router';
import { Flex } from 'rebass';

import { CONST_FILTERS as F } from '../const/filters';
import { filterHotels } from '../utils/filterHotels';
import { getHotels } from '../utils/getHotels';

import { Hotel } from '../components/Hotel';
import { ContentWrapper } from '../components/ContentWrapper';
import { Checkbox } from '../form/Checkbox';
import { SearchInput } from '../form/SearchInput';
import { Rating } from '../form/Rating';
import { Fieldset } from '../components/Fieldset';
import { RusultSummary } from '../components/ResultSummary';

const Container = styled(ContentWrapper).attrs(() => ({
  as: 'main',
}))`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;
`;

const HotelList = styled.ul`
  & > li:not(:last-child) {
    margin-bottom: 1rem;
  }
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const decorator = form => {
  return form.subscribe(
    () => {
      const formValues = form.getState().values;
      navigate(`/?${queryString.stringify(formValues)}`);
    },
    {
      values: true,
      initialValues: false,
    },
  );
};

const Filters = ({ queryParams }) => {
  return (
    <section>
      <Form
        decorators={[decorator]}
        onSubmit={() => undefined}
        initialValues={queryParams}
      >
        {() => {
          return (
            <form>
              <Fieldset>
                <legend>Stars</legend>
                <Field name={F.RATING} component={Rating} />
              </Fieldset>
              <Fieldset>
                <legend>Freebies</legend>
                <Field
                  name={F.FREE_BREAKFAST}
                  component={Checkbox}
                  type={'checkbox'}
                  label={'Free Breakfast'}
                  mb={'1rem'}
                />
                <Field
                  name={F.FREE_PARKING}
                  component={Checkbox}
                  type={'checkbox'}
                  label={'Free Parking'}
                  mb={'1rem'}
                />
                <Field
                  name={F.FREE_INTERNET}
                  component={Checkbox}
                  type={'checkbox'}
                  label={'Free Internet'}
                  mb={'1rem'}
                />
                <Field
                  name={F.FREE_CANCELLATION}
                  component={Checkbox}
                  type={'checkbox'}
                  label={'Free Cancellation'}
                  mb={'1rem'}
                />
                <Field
                  name={F.FREE_SHUTTLE}
                  component={Checkbox}
                  type={'checkbox'}
                  label={'Free Airport Shuttle'}
                  mb={'1rem'}
                />
                <Field
                  name={F.HAS_POOL}
                  component={Checkbox}
                  type={'checkbox'}
                  label={'Has Pool'}
                />
              </Fieldset>
              <Fieldset>
                <legend>Hotel Name</legend>
                <Field name={F.QUERY} component={SearchInput} />
              </Fieldset>
              <Link to={'/'}>Reset Filters</Link>
            </form>
          );
        }}
      </Form>
    </section>
  );
};

export const Home = ({ location }) => {
  const hotels = getHotels();
  const queryParams = queryString.parse(location.search);
  const hotelsToDisplay = filterHotels(queryParams, hotels);

  return (
    <Container>
      <Filters queryParams={queryParams} />
      <section>
        <RusultSummary length={hotelsToDisplay.length} />
        <HotelList>
          {hotelsToDisplay.length === 0 && (
            <Flex justifyContent={'center'} fontSize={4} py={'10rem'}>
              Sorry, no results
            </Flex>
          )}
          {hotelsToDisplay.map((hotel, index) => {
            return (
              <li key={hotel.name}>
                <Hotel hotel={hotel} index={index} />
              </li>
            );
          })}
        </HotelList>
      </section>
    </Container>
  );
};
