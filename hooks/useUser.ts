import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useUser = (userId: string) => {
    const { data,
         error,
          isLoading,
           mutate 
        } = useSWR(userId ? '/api/users/${userId}': null, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useUser;

// SWR is going to to fetch this slash API current using the axis fetcher which we created and it's going to store it in it's Global StorageEvent, so we're going to be able to reuse this useCurrentUser hook and it's not going to refetch it everytime we use it, it's actually gonna take a look and see if data already exists and it's also gonna decide whether data maybe needs to be re-invalidated and fetched Aguafina_Script. So basically this is going to replace our Global State like Redux & webkitURL're also provided with stuff like data, error, isLoading and muted if we purposely want to fetch it again 