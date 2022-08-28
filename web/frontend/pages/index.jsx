import {
  Page,
} from "@shopify/polaris";

import { useEffect } from "react";
import { useAppQuery } from "../hooks";
let token = 'IGQVJXdU9NX3RvMnFpMEpFc3NqZAjEtTjFsZAHh0X0lGX1YweEUxQ2RCZAmpKd0NKeEpTNHVmdXl2d2ZA3cDFRU2xYQm5QSG9kLWlSTDF4ZA2FtNDdITzg2VXNmaUxIYmZA4M3RpOUlqeU85SXhLQTFSbUx1OAZDZD'



export default function HomePage() {
  const {
    data,
    isLoading,
    isRefetching,
  } = useAppQuery({
    url: `/api/auth-link`,
    reactQueryOptions: {
      /* Disable refetching because the QRCodeForm component ignores changes to its props */
      refetchOnReconnect: false,
    },
  });

  console.log(data);


  return (
    <Page narrowWidth>
      <h1 >Connect to instagram</h1>
      {(isLoading || isRefetching) && (<div>Test</div>)}
    </Page>
  );
}
