import React, {useEffect, useState} from 'react';

import {Auth} from 'src/components/Auth';
import {useTypedNavigation} from 'src/hooks';
import {ghAuthEndResponse, githubAuth} from 'src/services';

export function AuthScreen() {
  const {navigate} = useTypedNavigation();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<undefined>();

  useEffect(() => {
    const onEndLoading = ({
      error,
      accessToken,
      errorMess,
    }: ghAuthEndResponse) => {
      setLoading(true);
      if (error) {
        setErrorMessage(errorMess);
      } else if (accessToken) {
        navigate('authenticationSuccess');
      }
    };

    githubAuth.on('gh-auth-end', onEndLoading);
    return () => {
      githubAuth.off('gh-auth-end', onEndLoading);
    };
  }, []);

  const onPressAuth = () => {
    githubAuth.authenticate();
  };

  return (
    <Auth
      loading={loading}
      errorMessage={errorMessage}
      onPressAuth={onPressAuth}
    />
  );
}
