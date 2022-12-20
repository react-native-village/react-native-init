import React from 'react';

import {gql, useQuery} from '@apollo/client';
import {Text} from 'react-native';

export const exploreProfiles = gql`
  query ExploreProfiles {
    exploreProfiles(request: {sortCriteria: MOST_FOLLOWERS}) {
      items {
        id
        name
        bio
        handle
        picture {
          ... on MediaSet {
            original {
              url
            }
          }
        }
        stats {
          totalFollowers
        }
      }
    }
  }
`;

export function TabScreen2() {
  const {loading, error, data} = useQuery(exploreProfiles, {
    context: {clientName: 'lenLink'},
  });
  console.log(loading, error);
  console.log(data?.exploreProfiles.items[0].bio);

  return <Text>{data?.exploreProfiles.items[0].bio}</Text>;
}
